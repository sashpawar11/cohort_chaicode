import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import UserRoute from './routes/auth.route.js'

dotenv.config();

const PORT = process.env.PORT || 3000
const app = express();

app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type","Authorization"]
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser);

app.get('/', (req, res) => {
    res.send('Working api call');
})

app.use('/api/v1/users/', UserRoute)


app.listen(PORT, () => {
    console.log("listening on port : ", PORT);
})

