import mongoose from "mongoose";
import {loadType} from 'mongoose-currency';
import { type } from "os";

const Schema = mongoose.Schema;
loadType(mongoose);

const dayschema = new Schema(
    {
        day:String,
        revenue:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => (v/100) 
         },
         expenses:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => (v/100) 
         },
         
    },
    {toJSON:{getters:true}}
);

const monthSchema = new Schema(
    {
        month:String,
        revenue:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => (v/100) 
         },
         expenses:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => (v/100) 
         },
         operationalExpenses:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => (v/100) 
         },
         nonOperationalExpenses:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => (v/100) 
         },
         
    },
    {toJSON:{getters:true}}
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
     monthlyData:[monthSchema],
     dailyData:[dayschema],
    },
    {timestamps:true, toJSON:{getters:true}}

);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;