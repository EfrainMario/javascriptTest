// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

var config = {
    apiKey: "AIzaSyA9dV6cEGkNqpn0ueJ2uT7aLZm_zLyw_k0",
    authDomain: "messageapp-34d03.firebaseapp.com",
    databaseURL: "https://messageapp-34d03.firebaseio.com",
    projectId: "messageapp-34d03",
    storageBucket: "messageapp-34d03.appspot.com",
    messagingSenderId: "427607886109"
};
firebase.initializeApp(config);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();