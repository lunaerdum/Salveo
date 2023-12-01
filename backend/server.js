import express from 'express';
import createHttpError from 'http-errors';
import morgan from 'morgan';
import dotenv from 'dotenv'
dotenv.config();
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

connectDB();

const app = express();
app.use(morgan('dev'));


app.use((req, res, next) => {
    next(createHttpError.NotFound());
});

app.use((error, req, res, next) => {
    error.status = error.status || 500;
    res.status(error.status);
    res.send(error);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors());
app.use(userRoutes);

//app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => console.log(`Server started on port ${port}`));