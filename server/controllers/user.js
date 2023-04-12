import Order from "../models/order";
import User from "../models/user";

// POST api/user
export const create = async (req, res) => {
  const { email, nomProduit, refProduit, quantite } = req.body; // Ajout des variables manquantes
  console.log(email);

  try {
    if (req.body) {
      const user = await new User(req.body).save(); // Ajout de la déclaration de la constante user
    }

    // Ajout de la commande
    const user = await User.findOne({ email });
    console.log("user", user);
    if (user) {
      req.body.ordered_by = user._id; // Correction de la clé 'ordred_by' en 'ordered_by'
      // Ajout de la commande
      const orderPro = new Order({
        nomProduit,
        refProduit,
        quantite,
        ordered_by: req.body.ordered_by, // Correction de la clé 'ordred_by' en 'ordered_by'
      });
      const order = await new Order(orderPro).save();

      return res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json({
      msg: "L'utilisateur ne peut pas être enregistré",
    });
  }
};

// GET api/users
export const list = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      error: [
        { msg: "Impossible de récupérer les utilisateurs" },
        { msg: err },
      ],
    });
  }
};

// GET api/users/:id
export const read = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne(
      { _id: id },
      "_id nom prenom adresse email"
    ).exec();
    res.status(200).json({ ...result, data: user || [] });
  } catch (err) {
    res.status(500).json({
      ...result,
      error: [{ msg: "Impossible de récupérer l'utilisateur" }, { msg: err }],
    });
  }
};

// DELETE api/users/:id
export const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ _id: id });
    if (!user)
      return res
        .status(400)
        .json({ ...result, error: [{ msg: "Cet utilisateur n'existe pas" }] });

    const deleted = await User.remove({ _id: id });
    res.status(200).json({
      ...result,
      data: deleted.deletedCount + " utilisateur(s) supprimé(s)",
    });
  } catch (err) {
    res.status(500).json({
      ...result,
      error: [{ msg: "Impossible de supprimer l'utilisateur" }, { msg: err }],
    });
  }
};
