import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQW3_-TEbLZV3zP0huQpa9w0SqRFsr-QU",
  authDomain: "mtja-de178.firebaseapp.com",
  projectId: "mtja-de178",
  storageBucket: "mtja-de178.appspot.com",
  messagingSenderId: "94441942155",
  appId: "1:94441942155:web:5a708e4e3c65bbe9f7388e",
  measurementId: "G-M7PT8BTL90",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
