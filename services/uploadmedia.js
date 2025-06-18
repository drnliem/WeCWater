import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";

export const uploadMedia = async (file, folder = "posts") => {
  const fileRef = ref(storage, `${folder}/${file.name}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
};
