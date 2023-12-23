
import { db } from '../../config/firebase';
import { doc, setDoc, collection } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const generateOrderID = () => {
  return uuidv4();
};

const createOrder = async (orderDetails) => {
  try {
    const ordersCollection = collection(db, 'orders');
    await setDoc(doc(ordersCollection, orderDetails.orderID), orderDetails);

    console.log('Orden creada exitosamente:', orderDetails);
    return true;
  } catch (error) {
    console.error('Error al crear la orden:', error);
    throw new Error('No se pudo crear la orden');
  }
};

export { generateOrderID, createOrder };
