import { initializeApp } from "firebase/app";
import { getFirestore,  doc, setDoc } from "firebase/firestore";
import { getProducts } from '../asyncMock';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDdnBk2BZZ6A8kX_EZYN6unO_I9PJdNxVQ",
  authDomain: "ecomerce-6fc8f.firebaseapp.com",
  projectId: "ecomerce-6fc8f",
  storageBucket: "ecomerce-6fc8f.appspot.com",
  messagingSenderId: "247016794960",
  appId: "1:247016794960:web:178a8db1e283db880c1a55"
};
const app = initializeApp(firebaseConfig);
   const db = getFirestore(app);
const transferirProductsAFirebase = async (products) => {
    
  
    for (const product of products) {
      try {
        await setDoc(doc(db, 'products', String(product.id)), product);
        console.log(`Producto "${product.name}" agregado a Firebase.`);
      } catch (error) {
        console.error(`Error al agregar el producto "${product.name}" a Firebase:`, error);
      }
    }
  };
  
  const obtenerProductsAsyncMock = async () => {
    try {
      const products = await getProducts();
      await transferirProductsAFirebase(products);
      console.log('Transferencia de productos completada.');
    } catch (error) {
      console.error('Error al obtener los productos desde asyncMock:', error);
    }
  };
  
  obtenerProductsAsyncMock();
  
  export const auth = getAuth(app)
  export {db}
  