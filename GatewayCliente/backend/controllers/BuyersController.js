import BuyersModel from "../models/BuyersModels.js";

export const getAllBuyers = async (req, res) => {
    try {
        const buyers = await BuyersModel.findAll()
        res.json(buyers)
    } catch (error) {
        res.json({message: error.message})        
    }
}

export const getBuyer = async(req, res)=>{
    try {
        const buyer = await BuyersModel.findAll({
            where:{id:req.params.id}
        })
        res.json(buyer[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createBuyer = async (req, res)=>{
    try {
        await BuyersModel.create(req.body)
        res.json({"message":"Registro creado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateBuyer = async (req, res)=>{
    try {
        await BuyersModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteBuyer = async (req, res)=>{
    try {
        await BuyersModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}