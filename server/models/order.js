const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const OrderSchema = new mongoose.Schema(
  {
    nomProduit: String,
    refProduit: {
      type: String,
      required: true,
      index: true,
    },
    quantite: { type: Number, required: true },
    // chaque user peux avoir plusieurs orders
    ordered_by: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
