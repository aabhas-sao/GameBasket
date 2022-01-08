import { addDoc, Timestamp, collection } from 'firebase/firestore';
import { db } from '../firebase';

interface createProductProps {
    title: string;
    price: number;
    subcategory: string;
    brand: string;
    date: string;
    specs: any,
}

const productCollectionRef = collection(db, 'products');

export const createProduct = async ({ title, price, subcategory, brand, date, specs }: createProductProps) => {
    const docData = {
        title,
        price,
        subcategory,
        brand,
        releaseDate: Timestamp.fromDate(new Date(date)),
        specs,
    }

    const docRef = await addDoc(productCollectionRef, docData);

    console.log(docRef);
    console.log(docData);
}