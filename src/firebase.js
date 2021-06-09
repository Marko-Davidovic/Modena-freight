import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({

	//apiKey: "AIzaSyBm0T-uZU26YGgUdq1nbtXcRuxCmAM3084",
	//authDomain: "modena-freight-789cb.firebaseapp.com",
	//projectId: "modena-freight-789cb",
	//storageBucket: "modena-freight-789cb.appspot.com",
	//messagingSenderId: "333264384577",
	//appId: "1:333264384577:web:d3fc60b9b4921474df4cc0"
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PRODJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
})

export const auth = app.auth()
export default app
