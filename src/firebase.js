import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBcjAmtGHCdDjWl1j84l6LmK5kL1nemzgI",
    authDomain: "whatsapp-clone-93596.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-93596.firebaseio.com",
    projectId: "whatsapp-clone-93596",
    storageBucket: "whatsapp-clone-93596.appspot.com",
    messagingSenderId: "141145996377",
    appId: "1:141145996377:web:7ec2a7a572bc9ba0940548",
    measurementId: "G-4XM97TPXHS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, storage, provider };
export default db;