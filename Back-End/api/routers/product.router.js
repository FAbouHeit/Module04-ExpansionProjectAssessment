import express from "express";
import { createProduct, readOneProduct, readAllProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";
import { verifyRole } from "../utils/verifyRole.js";

const router = express.Router();

router.post('/create',verifyRole(['admin']),createProduct)
router.get('/readone', readOneProduct)
router.get('/readall', readAllProduct)
router.patch('/update',verifyRole(['admin']), updateProduct)
router.delete('/delete',verifyRole(['admin']), deleteProduct)

export default router;