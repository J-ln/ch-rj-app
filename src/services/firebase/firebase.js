import * as firebase from "firebase/app"
import { getFirestore, collection, getDocs, getDoc, query, where } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC9MKYpHF1oeLqaLQd9gLMNpmcMcDGbu1M",
    authDomain: "ecommerce-jr-react.firebaseapp.com",
    projectId: "ecommerce-jr-react",
    storageBucket: "ecommerce-jr-react.appspot.com",
    messagingSenderId: "738148808524",
    appId: "1:738148808524:web:57fbf77524aabdace801e9",
    measurementId: "G-FT5DX8RK31"
};

const app = firebase.initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getAllProducts = (collect) => {
    const products = []
    getDocs(collection(db, collect))
        .then((querySnapshot) => {
            querySnapshot.docs.map(doc => {
                products.push({ id: doc.id, ...doc.data() })
            })
        })
        .then(() => {
            console.log(products)
            return products
        })
        .catch((err) => {
            console.log(err);
        })
    console.log(products)
}

export const getProductsCategory = (collect, category) => {
    const products = []
    getDoc(query(collection(db, collect), where("category", "==", category)))
        .then((querySnapshot) => {
            querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
        })
        .then(() => {
            return products
        })
        .catch((err) => {
            console.log(err)
        })
}