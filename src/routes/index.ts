import express from "express";
import products from "./products";

const router = express.Router();

router.use('/alive', products);

export default router;
