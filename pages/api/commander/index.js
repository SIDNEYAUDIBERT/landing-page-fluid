import nc from "next-connect";

import { create, listAll } from "@/server/controllers/user";
import db from "@/utils/db";

const handler = nc();

handler
  // commander création de user et commande
  .post(async (req, res) => {
    await db.connect();
    create(req, res);
    await db.disconnect();
  })

  // liste des utilisateur
  .get(async (req, res) => {
    await db.connect();
    listAll(req, res);
    await db.disconnect();
  });

export default handler;
