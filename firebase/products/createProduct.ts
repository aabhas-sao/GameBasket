import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';

interface createProductProps {
    title: string;
    price: number;
    subcategory: string;
    brand: string;
    date: string;
    specs: any,
}

export const createProduct = async ({ title, price, subcategory, brand, date, specs }: createProductProps) => {
    const docRef = doc(db, 'products');
    const docData = {
        title,
        price,
        subcategory,
        brand,
        releaseDate: Timestamp.fromDate(new Date(date)),
        specs,
    }

    // await setDoc(docRef, docData);
    console.log(docRef);
    console.log(docData);
}