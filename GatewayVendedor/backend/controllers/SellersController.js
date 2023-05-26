import SellersModel from "../models/SellersModel.js";

export const getAllSellers = async (req, res) => {
    try {
        const sellers = await SellersModel.findAll()
        res.json(sellers)
    } catch (error) {
        res.json({message: error.message})        
    }
}

export const getSeller = async(req, res)=>{
    try {
        const seller = await SellersModel.findAll({
            where:{id:req.params.id}
        })
        res.json(seller[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createSeller = async (req, res)=>{
    try {
        await SellersModel.create(req.body)
        res.json({"message":"Registro creado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateSeller = async (req, res)=>{
    try {
        await SellersModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteSeller = async (req, res)=>{
    try {
        await SellersModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}