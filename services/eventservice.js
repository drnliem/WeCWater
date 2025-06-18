// src/services/postService.js
import {
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    serverTimestamp,
    doc,
    getDoc
  } from "firebase/firestore";
  import { db } from "../lib/firebaseConfig";
  
  const postsRef = collection(db, "posts");
  
  // 🟢 CREATE POST dengan field sesuai format
  export async function createPost({
    Title,
    Lokasi,
    City,
    ["Waktu Pelaksanaan"]: waktuPelaksanaan,
    Maps,
    ["Gather Point"]: gatherPoint,
    Description,
    mediaUrls, 
    type
  }) {
    try {
      const docRef = await addDoc(postsRef, {
        Title,
        Lokasi,
        City,
        ["Waktu Pelaksanaan"]: waktuPelaksanaan,
        Maps,
        ["Gather Point"]: gatherPoint,
        Description,
        mediaUrls,
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