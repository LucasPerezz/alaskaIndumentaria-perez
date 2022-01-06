// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPwxRD2Fe4ObF68v4R4sfm1C0sHPAupZU",
  authDomain: "alaskaindumentaria-2d869.firebaseapp.com",
  projectId: "alaskaindumentaria-2d869",
  storageBucket: "alaskaindumentaria-2d869.appspot.com",
  messagingSenderId: "442503702671",
  appId: "1:442503702671:web:6eec1d296e8b13f57068fa",
  measurementId: "G-D7795L0DTC"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
