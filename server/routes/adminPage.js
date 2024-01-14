import { Router } from "express";
import { customerInfo } from "../models/customerInfo.models.js";
import { login } from "../models/login.models.js";

const router = Router();

router.get('/admindata', async (req, res) => {
  try {
    const allUser = await customerInfo.find({});
    res.send({ status: "Ok", data: allUser });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error", message: "Internal Server Error", error: error.message });
  }
});

router.get('/logindata', async (req, res) => {
  try {
    const allLogin = await login.find({});
    res.send({ status: "Ok", data: allLogin });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error", message: "Internal Server Error", error: error.message });
  }
});

export default router;
