import React from "react";
import {
  ChevronDoubleUpIcon,
  ChevronDoubleDownIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { format } from "date-fns";

type TotalSectionProps = {
  totalPLThisMonth: number;
  totalPLPreviousMonth: number;
  currentMonth?: Date;
  previousMonth?: Date;
};

const TotalSection: React.FC<TotalSectionProps> = ({
  totalPLThisMonth,
  totalPLPreviousMonth,
  currentMonth,
  previousMonth,
}) => {
  const isThisMonthPositive = totalPLThisMonth > 0;
  const isThisMonthNegative = totalPLThisMonth < 0;
  const isThisMonthZero = totalPLThisMonth === 0;

  const isPreviousMonthPositive = totalPLPreviousMonth > 0;
  const isPreviousMonthNegative = totalPLPreviousMonth < 0;
  const isPreviousMonthZero = totalPLPreviousMonth === 0;

  const currentMonthFormatted = currentMonth
    ? format(currentMonth, "MMM")
    : "N/A";
  const previousMonthFormatted = previousMonth
    ? format(previousMonth, "MMM")
    : "N/A";

  return (
    <div className="mt-10 flex gap-10">
      {/* This Month */}
      <div
        className={`w-52 rounded-3xl bg-gradient-to-b from-blue-300 ${
          isThisMonthPositive
            ? "dark:to-green-900"
            : isThisMonthNegative
              ? "dark:to-red-900"
              : "dark:to-gray-100"
        } p-px text-white shadow dark:from-blue-800`}
      >
        <div className="rounded-[calc(1.5rem-1px)] bg-primary-500">
          <div className="gap-4 text-center hover:cursor-default">
            <div className="flex items-center gap-2 p-2 text-center">
              {isThisMonthPositive ? (
                <ChevronDoubleUpIcon className="size-6 text-green-600" />
              ) : isThisMonthNegative ? (
                <ChevronDoubleDownIcon className="size-6 text-red-600" />
              ) : (
                <Bars2Icon className="size-6 text-gray-100" />
              )}
              <p
                className={`flex justify-start pt-1 text-sm tracking-wide ${
                  isThisMonthZero ? "text-gray" : ""
                }`}
              >
                This month
              </p>
            </div>
            <div className="mt-4 grid grid-cols-3 items-center justify-center gap-4 p-2">
              <div className="">
                <p className="text-md pt-1 text-center tracking-wider [writing-mode:vertical-lr]">
                  Total P&L
                </p>
              </div>
              <div className="col-span-1 flex justify-center">
                <p
                  className={`pt-1 text-lg ${
                    isThisMonthPositive
                      ? "text-green-500"
                      : isThisMonthNegative
                        ? "text-red-500"
                        : "text-gray-100"
                  }`}
                >
                  {totalPLThisMonth}
                </p>
              </div>
            </div>
            <div className="flex justify-end p-2">
              <div className="rounded-full bg-gradient-to-b from-secondary-300 to-secondary-100 p-1">
                <p className="text-sm tracking-wider text-white">
                  {currentMonthFormatted}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Month */}
      <div
        className={`w-52 rounded-3xl bg-gradient-to-b from-blue-300 ${
          isPreviousMonthPositive
            ? "dark:to-green-900"
            : isPreviousMonthNegative
              ? "dark:to-red-900"
              : "dark:to-gray-100"
        } p-px text-white shadow dark:from-blue-800`}
      >
        <div className="rounded-[calc(1.5rem-1px)] bg-primary-500">
          <div className="gap-4 text-center hover:cursor-default">
            <div className="flex items-center gap-2 p-2 text-center">
              {isPreviousMonthPositive ? (
                <ChevronDoubleUpIcon className="size-6 text-green-600" />
              ) : isPreviousMonthNegative ? (
                <ChevronDoubleDownIcon className="size-6 text-red-600" />
              ) : (
                <Bars2Icon className="size-6 text-gray-600" />
              )}
              <p
                className={`flex justify-start pt-1 text-sm tracking-wide ${
                  isPreviousMonthZero ? "text-gray-500" : ""
                }`}
              >
                Previous month
              </p>
            </div>
            <div className="mt-4 grid grid-cols-3 items-center justify-center gap-4 p-2">
              <div className="">
                <p className="text-md pt-1 text-center tracking-wider [writing-mode:vertical-lr]">
                  Total P&L
                </p>
              </div>
              <div className="col-span-1 flex justify-center">
                <p
                  className={`pt-1 text-lg ${
                    isPreviousMonthPositive
                      ? "text-green-500"
                      : isPreviousMonthNegative
                        ? "text-red-500"
                        : "text-gray-100"
                  }`}
                >
                  {totalPLPreviousMonth}
                </p>
              </div>
            </div>
            <div className="flex justify-end p-2">
              <div className="rounded-full bg-gradient-to-b from-secondary-300 to-secondary-100 p-1">
                <p className="text-sm tracking-wider text-white">
                  {previousMonthFormatted}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSection;
