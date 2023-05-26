import express from "express";
import { getAllSellers, getSeller, createSeller, updateSeller, deleteSeller } from "../controllers/SellersController.js";
const router = express.Router()

router.get('/', getAllSellers)
router.get('/:id', getSeller)
router.post('/', createSeller)
router.put('/:id', updateSeller)
router.delete('/:id', deleteSeller)

export default router