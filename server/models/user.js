const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  adresse: String,
  email: {
    type: String,
    required: true,
    index: true,
  },
  numeroTel: Number,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
