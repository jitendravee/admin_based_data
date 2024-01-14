import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import loginRouter from './routes/login.route.js';
import customerInfoRouter from './routes/customerInfo.route.js';
import adminDataRouter from './routes/adminPage.js';
import cors from 'cors';
dotenv.config();
const PORT = process.env.PORT || 3500;

const app = express();

app.use(cors())
app.use(express.json());
app.use('/', loginRouter);
app.use('/', customerInfoRouter);
app.use('/', adminDataRouter);
mongoose.connect(process.env.MONGO).then(
    () => {
        console.log('DB connected successful');
    }
).catch((error) => {
    console.log(error);
    console.log('DB error');
})




app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})