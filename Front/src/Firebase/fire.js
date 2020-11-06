import firebase from "firebase";

var firebaseConfig = {
    apiKey: "*********************************",
    authDomain: "hitcounter-dded4.firebaseapp.com",
    databaseURL: "https://XXXXXXXXXXXXXXXXXX.firebaseio.com",
    projectId: "hitcounter-dded4",
    storageBucket: "hitcounter-dded4.appspot.com",
    messagingSenderId: "******************",
    appId: "*****************************",
    measurementId: "G-V51M069G4L"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const fireAnalytics = firebase.analytics();

export default fire;
