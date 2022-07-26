import * as firebase from "firebase/app"
import { getFirestore, collection, getDocs, getDoc, query, where, doc } from "firebase/firestore"

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

export const getAllProducts = async (collect) => {
    let querySnapshot = await getDocs(collection(db, collect))
    let products = [];
    querySnapshot.docs.map(doc => {
        products.push({ id: doc.id, ...doc.data() })
    })
    return products;
}

export const getProductsCategory = async (collect, category) => {
    let querySnapshot = await getDocs(query(collection(db, collect), where("category", "==", category)))
    let products = [];
    querySnapshot.docs.map(doc => {
        products.push({ id: doc.id, ...doc.data() })
    })
    return products;
}

export const getProductById = async (collect, id) => {
    let productRef = await getDoc(doc(db, collect, id))
    let product = { id: id, ...productRef.data() }
    return product
}