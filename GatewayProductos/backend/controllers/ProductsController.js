import ProductsModel from "../models/ProductsModel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductsModel.findAll()
        res.json(products)
    } catch (error) {
        res.json({message: error.message})        
    }
}

export const getProduct = async(req, res)=>{
    try {
        const product = await ProductsModel.findAll({
            where:{id:req.params.id}
        })
        res.json(product[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createProduct = async (req, res)=>{
    try {
        await ProductsModel.create(req.body)
        res.json({"message":"Registro creado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateProduct = async (req, res)=>{
    try {
        await ProductsModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteProduct = async (req, res)=>{
    try {
        await ProductsModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}