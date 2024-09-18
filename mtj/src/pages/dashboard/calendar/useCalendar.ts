import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { auth } from "@/firebase/firebase";
import { useState, useEffect } from "react";
import {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
} from "date-fns";

const db = getFirestore();

type DayData = {
  [key: string]: string;
};

export const useCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [inputData, setInputData] = useState<DayData>({});
  const [previousMonthData, setPreviousMonthData] = useState<DayData>({});
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      setLoading(true);
      fetchUserData(user.uid, currentMonth, setInputData)
        .then(() =>
          fetchUserData(
            user.uid,
            subMonths(currentMonth, 1),
            setPreviousMonthData,
          ),
        )
        .finally(() => setLoading(false));
    }
  }, [user, currentMonth]);

  const fetchUserData = async (
    userId: string,
    month: Date,
    setData: Function,
  ) => {
    try {
      const monthKey = format(month, "yyyy-MM");
      const docRef = doc(db, "p&l", userId, "months", monthKey);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data() as DayData);
      } else {
        setData({});
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setData({});
    }
  };

  const handleInputChange = (date: Date, value: string) => {
    const dateKey = format(date, "yyyy-MM-dd");
    setInputData((prevData) => {
      const newData = {
        ...prevData,
        [dateKey]: value,
      };
      return newData;
    });
  };

  const saveDataToFirestore = async () => {
    if (!user) return;

    const monthKey = format(currentMonth, "yyyy-MM");
    const docRef = doc(db, "p&l", user.uid, "months", monthKey);

    try {
      await setDoc(docRef, inputData, { merge: true });
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // Function to calculate total P&L for a given month
  const calculateTotalPL = (data: DayData) => {
    const values = Object.values(data)
      .map(Number)
      .filter((val) => !isNaN(val));
    return values.reduce((total, value) => total + value, 0);
  };

  // Function to calculate percentage change for the month
  const calculatePercentageChange = (data: DayData) => {
    const values = Object.values(data)
      .map(Number)
      .filter((val) => !isNaN(val));
    const startValue = values.length > 0 ? values[0] : 0;
    const totalPL = calculateTotalPL(data);
    if (startValue === 0) return 0;
    return ((totalPL - startValue) / startValue) * 100;
  };

  const totalPLThisMonth = calculateTotalPL(inputData);
  const totalPLPreviousMonth = calculateTotalPL(previousMonthData);

  const percentageChangeThisMonth =
    inputData && Object.keys(inputData).length > 0
      ? calculatePercentageChange(inputData)
      : 0;

  const percentageChangePreviousMonth =
    previousMonthData && Object.keys(previousMonthData).length > 0
      ? calculatePercentageChange(previousMonthData)
      : 0;

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth)),
  });

  return {
    currentMonth,
    days,
    inputData,
    handleInputChange,
    nextMonth,
    prevMonth,
    saveDataToFirestore,
    totalPLThisMonth,
    totalPLPreviousMonth,
    percentageChangeThisMonth,
    percentageChangePreviousMonth,
    loading,
  };
};
