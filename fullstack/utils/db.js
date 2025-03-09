import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const db = () => {

    
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log('Successfully connected to mongoDB');
        })
        .catch(err => {
            console.error('Error connecting to mongoDB: ', err);
        })
};



export default db;