
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCVgrZUhBOLHALdw0nZFlBCZrfpKJucyZM",
    authDomain: "contactform-76fb2.firebaseapp.com",
    projectId: "contactform-76fb2",
    storageBucket: "contactform-76fb2.appspot.com",
    messagingSenderId: "194405887421",
    appId: "1:194405887421:web:8ca2ddebe3a34d3c7b36d4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Realtime Database and get a reference to the service
  const database = getDatabase(app);
  const messagesRef = ref(database, 'messages');

  // Listen to form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');   
    var message = getInputVal('message');

    // Save message
    saveMessage(name, email, message);
  }

  // Function to get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  // Function to save the message to Firebase
  function saveMessage(name, email, message) {
    const newMessageRef = push(messagesRef);
    set(newMessageRef, {
      name: name,
      email: email,
      message: message
    });
  }
