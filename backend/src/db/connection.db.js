import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect('mongodb://127.0.0.1:27017/product?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1')
        console.log(connectionInstance.connection.host)
    } catch (error) {
        console.log('Error in connectiong with db: ', error)
    }
}

export {
    connectDB
}