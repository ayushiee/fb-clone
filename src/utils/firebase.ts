import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import config from '../config.json';

const firebaseConfig = config.firebase;

firebase.initializeApp(firebaseConfig);

export type Auth = firebase.auth.Auth;
export type Firestore = firebase.firestore.Firestore;
export type GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
export type DocumentData = firebase.firestore.DocumentData;
export type UnsubscribeFn = () => void;
export type DocumentSnapshot<T> = firebase.firestore.DocumentSnapshot<T>;
export type SnapshotFn = (snapshot: DocumentSnapshot<DocumentData>) => void;

export const firestore: Firestore = firebase.firestore();
export const auth: Auth = firebase.auth();
export const provider: GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
