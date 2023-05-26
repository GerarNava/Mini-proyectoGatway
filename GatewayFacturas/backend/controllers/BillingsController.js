import BillingsModel from "../models/BillingsModel.js";

export const getAllBillings = async (req, res) => {
    try {
        const billings = await BillingsModel.findAll()
        res.json(billings)
    } catch (error) {
        res.json({message: error.message})        
    }
}

export const getBilling = async(req, res)=>{
    try {
        const billing = await BillingsModel.findAll({
            where:{id:req.params.id}
        })
        res.json(billing[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createBilling = async (req, res)=>{
    try {
        await BillingsModel.create(req.body)
        res.json({"message":"Registro creado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateBilling = async (req, res)=>{
    try {
        await BillingsModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteBilling = async (req, res)=>{
    try {
        await BillingsModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}