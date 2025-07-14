import mongoose from "mongoose";
import {loadType} from 'mongoose-currency';
import { type } from "os";

const Schema = mongoose.Schema;
loadType(mongoose);

const monthSchema = new Schema(
    {
        month:String,
    }
)

const KPISchema = new Schema(
    {
     totalProfit:{
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => (v/100) 
     },
     totalRevenue:{
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => (v/100) 
     },
     totalExpenses:{
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => (v/100) 
     },
     expenseByCatergory:{
        type:Map,
        of:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => (v/100) 
        }
     },
     monthlyData:[]

     
    }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;