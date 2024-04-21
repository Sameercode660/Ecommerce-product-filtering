import { Router } from "express";
import { allProduct, findProduct, insertProduct } from "../controllers/products.controller.js";

const productRouter = Router()

productRouter.route('/insertProduct').post(insertProduct)
productRouter.route('/findProduct').post(findProduct)
productRouter.route('/allProduct').post(allProduct)

export {
    productRouter
}
