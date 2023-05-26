import express from "express";
import { getAllBillings, getBilling, createBilling, updateBilling, deleteBilling } from "../controllers/BillingsController.js";
const router = express.Router()

router.get('/', getAllBillings)
router.get('/:id', getBilling)
router.post('/', createBilling)
router.put('/:id', updateBilling)
router.delete('/:id', deleteBilling)

export default router