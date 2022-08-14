import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDVYBViJOV9Nk25QYM8twUGDgnnCReHqFY",
    authDomain: "portfolio-4121c.firebaseapp.com",
    projectId: "portfolio-4121c",
    storageBucket: "portfolio-4121c.appspot.com",
    messagingSenderId: "614355616508",
    appId: "1:614355616508:web:fb00fa2e162b446a804d79",
    measurementId: "G-LTXK9C1PVH"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();