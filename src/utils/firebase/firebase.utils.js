import { initializeApp } from 'firebase/app';
import { onAuthStateChanged, signOut, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, getDocs, collection, query, writeBatch } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "ricky-shirts-db.firebaseapp.com",
    projectId: "ricky-shirts-db",
    storageBucket: "ricky-shirts-db.appspot.com",
    messagingSenderId: "883773930867",
    appId: "1:883773930867:web:5360b2b62d0ad94c251906"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// User authentication code

//Google auth provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

// Export authentication methods for use in components
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Instantiate Firestore
export const db = getFirestore();

// Creating the user doc in Firestore from the auth object returned from Firebase (for Google popup)
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    // Create data snapshot from the auth object
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    // Set the doc if user snapshot does not exist yet
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('Error registering the account', error.message);
        }
    }
    return userDocRef;
}

// Signup with email and password

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

// Sign in with email and password

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

// Sign out

export const signOutUser = async () => {
    await signOut(auth); 
}

// Helper function for auth state observer. When auth state changes, run the callback

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);


// Data store code

// Adding items to the database
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    })

    await batch.commit();
    console.log('batch write done')
};

// Get items from the database
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    // Generate query off the collection ref
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    // Build category map from the query snapshot
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
};

