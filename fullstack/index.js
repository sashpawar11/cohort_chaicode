import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
import db from './utils/db.js'
import userRoutes from './routes/user.routes.js'

dotenv.config()

const port = process.env.PORT || 4000;
const app = express();

app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type","Authorization"]
}))


app.use(express.json())
app.use(express.urlencoded({extended: true}))
db();

app.get('/', (req, res) => {
    res.send('Working api call');
})

db()

app.use('/api/v1/users/', userRoutes)






app.listen(port, () => {
    console.log('App runnin on port : ', port);
})
