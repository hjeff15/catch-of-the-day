import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAhoY9o6miMJoNY4OCH55GaNMnn2tKjzT4",
    authDomain: "catch-of-the-day-hugo.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-hugo.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export {firebaseApp};

//This is a default export
export default base;


