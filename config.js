import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyDBBBqkLVjsoFs7cSK2d6XK-CnUCwbCkGc",
	authDomain: "wireless-buzzer-app-f0859.firebaseapp.com",
	databaseURL: "https://wireless-buzzer-app-f0859-default-rtdb.firebaseio.com",
	projectId: "wireless-buzzer-app-f0859",
	storageBucket: "wireless-buzzer-app-f0859.appspot.com",
	messagingSenderId: "579561154551",
	appId: "1:579561154551:web:af1ba3b46c60e55f3770f2",
	measurementId: "G-Z8LYQCW8YV"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
