import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js'
import cookieParser from 'cookie-parser';
import categoryRoutes from './routes/category.routes.js'
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
   credentials: true
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api",authRoutes);
app.use("/api",productRoutes);
app.use("/api",categoryRoutes)


export default app;
