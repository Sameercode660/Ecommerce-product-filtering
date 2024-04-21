import { Product } from "../models/products.model.js"

const insertProduct = async(req, res) => {
    try {
        const response = await Product.insertMany(req.body)
        return res.status(200).json({response, status: true})
    } catch (error) {
        console.log('Error in insertProduct: ', error)
    }
}

const findProduct = async (req, res) => {
    try {
      
        if(!req.body) {
            return res.status(400)
        }

        const {category} = req.body

        const response = await Product.find({category})

        return res.status(200).json({response, status: true})

    } catch (error) {
        console.log('Error in findProduct ', error)
    }
}

const allProduct = async (req, res) => {
    try {
        const response = await Product.find({})

        return res.status(200).json({response})
    } catch (error) {
        console.log('Error in allproduct: ', error)
    }
}

export {
    insertProduct,
    findProduct,
    allProduct
}