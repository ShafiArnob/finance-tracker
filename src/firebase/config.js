import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyB4NlJKU5qkVp-cW8niqJ4UE2_DCQdD2Do",
  authDomain: "finance-tracker-eebce.firebaseapp.com",
  projectId: "finance-tracker-eebce",
  storageBucket: "finance-tracker-eebce.appspot.com",
  messagingSenderId: "444612622595",
  appId: "1:444612622595:web:7f62b537f24b9025cc5136"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//time stamp
const timeStamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timeStamp}