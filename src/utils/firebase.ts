import firebase from 'firebase/app'

import config from '../config.json'

const firebaseConfig = config.firebase

firebase.initializeApp(firebaseConfig);
