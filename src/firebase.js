import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBJ7bULzeXOlMHNdMjcIVoY1LeYMoUhUUc",
    authDomain: "clone-8bf44.firebaseapp.com",
    projectId: "clone-8bf44",
    storageBucket: "clone-8bf44.appspot.com",
    messagingSenderId: "27017823427",
    appId: "1:27017823427:web:d59337be9da19f5d0ace76",
    measurementId: "G-60NPQMZX59"
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()