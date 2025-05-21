// lib/userService.js
import { db } from './firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

export async function saveUserData(userId, username, email) {
  try {
    await setDoc(doc(db, 'users', userId), {
      username,
      email,
      createdAt: new Date(),
    });
  } catch (error) {
    throw error;
  }
}
