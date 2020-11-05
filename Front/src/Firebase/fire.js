import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA3S_JJW0lvdAcUY4yomeG9dVjZMBLTez8",
    authDomain: "hitcounter-dded4.firebaseapp.com",
    databaseURL: "https://hitcounter-dded4.firebaseio.com",
    projectId: "hitcounter-dded4",
    storageBucket: "hitcounter-dded4.appspot.com",
    messagingSenderId: "9404216278",
    appId: "1:9404216278:web:f24c26df1e7e88a08daa77",
    measurementId: "G-V51M069G4L"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const fireAnalytics = firebase.analytics();

export default fire;