import express from "express";
import { getAllBuyers, getBuyer, createBuyer, updateBuyer, deleteBuyer } from "../controllers/BuyersController.js";
const router = express.Router()

router.get('/', getAllBuyers)
router.get('/:id', getBuyer)
router.post('/', createBuyer)
router.put('/:id', updateBuyer)
router.delete('/:id', deleteBuyer)

export default router