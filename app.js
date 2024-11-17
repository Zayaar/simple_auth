// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCc8HWgyLi88QeQvfuFPhfHTkZvSNJQgBQ",
    authDomain: "simple-auth-da4fc.firebaseapp.com",
    projectId: "simple-auth-da4fc",
    storageBucket: "simple-auth-da4fc.firebasestorage.app",
    messagingSenderId: "1046604322272",
    appId: "1:1046604322272:web:560234c285641602d64785",
    measurementId: "G-F8BTN1PWEN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login form
const loginForm = document.getElementById('login-form');
const message = document.getElementById('message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Email:', email);  // Debugging
    console.log('Password:', password);  // Debugging

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User signed in:', userCredential);  // Debugging
            message.textContent = 'Login successful!';
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
        })
        .catch((error) => {
            console.log('Error:', error);  // Debugging
            message.textContent = 'Error: ' + error.message;
        });
});
