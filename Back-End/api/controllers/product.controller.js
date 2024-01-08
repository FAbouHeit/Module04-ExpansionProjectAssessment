import db from '../models/index.js'
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const {ProductModel} = db;

// - The schema should include fields for title, category, description, price and supplier.

export const createProduct = async (req,res)=>{
    const { title, category, description, price, supplier} = req.body;

    const existingProduct = await ProductModel.findOne({ where: { title } });

    if (existingProduct) {
      return res.status(400).json({ message: 'Product already exists' });
    }


    try{
    const newProduct = await ProductModel.create({
        title,
        category, 
        description, 
        price, 
        supplier,
    });
    await newProduct.save()  
        res.status(201).json({message: "Product created successfully!"})
    } catch (error) {
        res.status(500).json({message: "create product error!", error: error.message})
    }
}


export const readOneProduct = async (req,res, next) =>{
    const {title} = req.body;
    try{
        const validProduct = await ProductModel.findOne({ where: { title } });

    if(!validProduct) {
        res.status(500).json({message: "invalid product!, not found"})
    }

    res.status(200).json({validProduct});
    
    } catch (error) {
        res.status(500).json({message: "reading product error!", error: error.message})
    }
};


export const readAllProduct = async (req,res, next) =>{
    try{
    const allProducts = await ProductModel.findAll();
    res.status(200).json(allProducts);
    } catch (error){
        res.status(500).json({message: "error reading products", error: error.message});
    }
};

export const updateProduct = async (req,res)=>{
    const title = req.body.title;

    try{
        const product = await ProductModel.findOne({ where: { title } });
        // product.title = req.body.title || product.title
        product.category = req.body.category || product.category
        product.description = req.body.description || product.description
        product.price = req.body.price || product.price
        product.supplier = req.body.supplier || product.supplier

        await product.save();
        res.status(200).json({message: "done successfully!"});
    } catch (err){
        res.status(500).json({message: "error updating product!", error: err.message});
    }

}

export const deleteProduct = async (req,res)=>{
    const title = req.body.title;

    try{
        const product = await ProductModel.findOne({where: {title}});
        await product.destroy();
        res.status(200).json('Article has been deleted successfully!')
    } catch (err){
        res.status(500).json({message: 'Article has been deleted successfully!', error: err.message})
    }
}