import express from 'express'
import cors from 'cors'
import { productRouter } from './routes/products.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/product', productRouter)


export {
    app
}