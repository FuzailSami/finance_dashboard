import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import kpiRoutes from './routes/kpi.js';
import productRoutes from './routes/product.js'
import Product from './models/Product.js';
import KPI from './models/KPI.js';
import transactionRoutes from "./routes/transaction.js"
import Transaction from "./models/Transactions.js"
import { kpis,products, transactions } from './data/data.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use("/kpi", kpiRoutes);
app.use("/product",productRoutes)
app.use("/transaction",transactionRoutes)



const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
})
.then( async() =>{
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    await mongoose.connection.db.dropDatabase();
    KPI.insertMany(kpis);
    Product.insertMany(products);
    Transaction.insertMany(transactions);

})
.catch((error) => console.log(`${error} did not connect`));


