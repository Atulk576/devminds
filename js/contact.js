import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADIO2sYRQkZ2WcjJ4FKVOCkDOEyltHr6g",
  authDomain: "service-f3a1b.firebaseapp.com",
  projectId: "service-f3a1b",
  storageBucket: "service-f3a1b.appspot.com",
  messagingSenderId: "1013063226735",
  appId: "1:1013063226735:web:6fde586362a60be8e7049a",
  measurementId: "G-M6JLLYFC85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const project = document.getElementById("project").value.trim();
    const countryCode = document.getElementById("countryCode").value;
    const phoneNumber = document.getElementById("number").value.trim();
    const fullPhoneNumber = `+${countryCode}${phoneNumber}`;

    // Validate inputs
    if (!name || !email || !project || !phoneNumber) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // Store data in Firestore
      await addDoc(collection(db, "ContactUs"), {
        name,
        email,
        project,
        phoneNumber: fullPhoneNumber,
        timestamp: new Date(),
      });

      alert("Thanks for Connecting.");
      form.reset();
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("There was an error submitting your request. Please try again.");
    }
  });
});
