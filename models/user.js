// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
});

// Cegah model duplikat saat hot reload
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
