import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getFirestore,
  writeBatch,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz3EvwJVGTS_PGKNxcylsC9qppwBzqpec",
  authDomain: "excelirate-7e057.firebaseapp.com",
  projectId: "excelirate-7e057",
  storageBucket: "excelirate-7e057.appspot.com",
  messagingSenderId: "528609892176",
  appId: "1:528609892176:web:243138eb2e76e25bad3e55",
  measurementId: "G-2GPJJEQXF3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(app);

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(app);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.categoryName);
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "service-categories");
  const categorySnapshot = await getDocs(collectionRef);
  const categoryMap = categorySnapshot.docs.map((docSnapshot) =>
    docSnapshot.data()
  );

  return { data: categoryMap };
};

export const addData = async (args) => {
  try {
    const categoryRef = doc(db, "service-categories", args.category);
    await updateDoc(categoryRef, args.updatedData);
  } catch (error) {
    console.log(error);
  }
};
