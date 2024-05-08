import { uploadProductImage } from '../libs/cloudinary.js';
import Product from '../models/product.model.js'
import fs from 'fs-extra'

export const getProducts = async (req, res) => {
    const product = await Product.find()
    res.json(product);
}


export const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Producto no encontrado" })

    res.status(200).json(product)
}

//in task is createTask
export const newProduct = async (req, res) => {
    try {
        //en hind es createProduct
        const { price, description, name, rating, stock, discountPercentaje, brand, category } = req.body

        const newProduct = new Product({
            price, description, name, stock, category
        })
        if(!category){
            return res.status(400).json({message: "Debes seleccionar una categoria"});
        }

        if (req.files?.image) {

            const response = await uploadProductImage(req.files.image.tempFilePath)

            newProduct.images = {
                url: response.secure_url
            }

            await fs.remove(req.files.image.tempFilePath)



        }

        const productSave = await newProduct.save()
        res.status(201).json(productSave)
        /*
        res.status(200).json({
            title:productSave.title,
            
        })*/
        console.log(productSave)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error })

    }
}



export const updateProduct = async (req, res) => {

    const { price, description, name, rating, stock, discountPercentaje, brand, category } = req.body
    
    const getProduct = await Product.findById(req.params.id)
    if(!getProduct) return res.status(404).json({message: "No se encontró el producto"});

    console.log(getProduct, "this a getproduct")
    if(!category){
        return res.status(400).json({message: "Debes seleccionar una categoria"});
    }

    if (req.files?.image) {

        const response = await uploadProductImage(req.files.image.tempFilePath)

        getProduct.images = {
            url: response.secure_url
        }

        await fs.remove(req.files.image.tempFilePath)

        await getProduct.save();


    }


    const product = await Product.findByIdAndUpdate(req.params.id, { price, description, name, stock, category}, {
        new: true
    })
    if (!product) return res.status(404).json({ message: 'Product not found' })




    res.status(201).json(product)
}
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) return res.status(404).json({ message: 'Product not found' })

        res.status(204).json({ message: 'Product deleted' })
    } catch (error) {
        console.log(error)
    }
}

/*

 ???? export const deleteProduct = async (req, res) => {
    
}
*/

