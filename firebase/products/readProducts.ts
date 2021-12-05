import { doc, getDoc } from "@firebase/firestore";
import { db } from "../firebase";

export const fetchDeals = async (collectionName: string, dealType: string) => {
    const docRef = doc(db, collectionName, dealType);
    const docSnap = await getDoc(docRef);
    const products: any[] = [];

    if (docSnap.exists()) {
        let dealIds = docSnap.data();
        dealIds = dealIds.docs;

        await Promise.all(dealIds.map(async (deal: any) => {
            const dealRef = doc(db, "products", deal);
            const dealRes = await getDoc(dealRef);
            products.push({ id: deal, ...dealRes.data() });
            console.log(products)
        }))

        return products;
    }

    return [];
}


export const fetchProduct = async (id: string) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    }

    return {};
}