// src/services/postService.js
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp, doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";

const postsRef = collection(db, "posts");

export async function createPost({ title, description, mediaUrls, type }) {
  try {
    const docRef = await addDoc(postsRef, {
      title,
      description,
      mediaUrls, // array of string URL (foto/video)
      createdAt: serverTimestamp(),
      type
    });
    return docRef.id;
  } catch (error) {
    throw error;
  }
}

export async function fetchPosts() {
  try {
    const q = query(postsRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw error;
  }
}

export const getPosts = async () => {
  const snapshot = await getDocs(collection(db, "posts"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export const getPostById = async (id) => {
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};