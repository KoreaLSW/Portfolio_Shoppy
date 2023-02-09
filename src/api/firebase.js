import { initializeApp } from 'firebase/app';
import { v4 as uuid } from 'uuid';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, set, get, remove } from 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
    signInWithPopup(auth, provider)
        .then((result) => {
            return result;
        })
        .catch((error) => {
            console.error(error);
        });
}

export function logout() {
    signOut(auth).catch((error) => {
        console.error(error);
    });
}

export async function onUserStateChange(callback) {
    onAuthStateChanged(auth, async (user) => {
        const updatedUser = user ? await adminUser(user) : null;
        callback(updatedUser);
    });
}

async function adminUser(user) {
    return get(ref(database, 'admins')) //
        .then((snapshot) => {
            if (snapshot.exists()) {
                const admins = snapshot.val();
                const isAdmin = admins.includes(user.uid);
                return { ...user, isAdmin };
            }
            return user;
        });
}

export async function getMainBannerImg() {
    return get(ref(database, 'bannerImg')).then((snapshot) => {
        if (snapshot.exists()) {
            return Object.values(snapshot.val());
        }
        return [];
    });
}

export async function addNewProduct(product, image) {
    const id = uuid();
    return set(ref(database, `products/${uuid()}`), {
        ...product,
        id,
        price: parseInt(product.price),
        image,
        options: product.option.split(','),
        colors: product.color.split(','),
    });
}

export async function getProducts(productType) {
    const type = productType.queryKey[1];

    return get(ref(database, 'products')).then((snapshot) => {
        if (snapshot.exists()) {
            const products = Object.values(snapshot.val());
            if (type === 'Man') {
                return products.filter((value) => value.category === '남성옷');
            } else if (type === 'Woman') {
                return products.filter((value) => value.category === '여성옷');
            } else if (type === 'Accessory') {
                return products.filter(
                    (value) => value.category === '액세서리'
                );
            } else {
                return products;
            }
        }
        return [];
    });
}

export async function getCart(userId) {
    return get(ref(database, `carts/${userId}`)) //
        .then((snapshot) => {
            const items = snapshot.val() || {};
            return Object.values(items);
        });
}

export async function addOrUpdateToCart(userId, product) {
    console.log('userId', product);
    return set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFormCart(userId, productId) {
    return remove(ref(database, `carts/${userId}/${productId}`));
}
