import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import config from '../config.json';

const firebaseConfig = config.firebase;

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
