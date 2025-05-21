import bcrypt from 'bcryptjs';

// Fungsi untuk hash password
export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);  // cost factor 10
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

// Fungsi untuk verifikasi password dengan hash yang tersimpan
export async function verifyPassword(password, hashedPassword) {
  const isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;  // true jika cocok, false jika tidak
}
