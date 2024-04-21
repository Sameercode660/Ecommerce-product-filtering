import mongoose, {Schema} from "mongoose";

const productsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }

}, {timestamps: true})

export const Product = mongoose.model('product', productsSchema)