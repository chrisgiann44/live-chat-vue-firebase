import firebase from 'firebase/app'
// eslint-disable-next-line
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAB68oFV-y8B6MpiKNxk8ZltYBVSyeCLTo",
    authDomain: "live-chat-2a898.firebaseapp.com",
    databaseURL: "https://live-chat-2a898.firebaseio.com",
    projectId: "live-chat-2a898",
    storageBucket: "",
    messagingSenderId: "210195279064",
    appId: "1:210195279064:web:7505c54c593bfa8a5ebbad",
    measurementId: "G-STH32BBB9N"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()