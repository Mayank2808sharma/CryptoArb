import axios from 'axios';
import { DepthManager } from './DepthManager';


const solInrMarket = new DepthManager("B-SOL_INR");

const USDTInrMarket = new DepthManager("B-USDT_INR");

const solUSDTMarket = new DepthManager("B-SOL_USDT");


setInterval(()=>{
    console.log(solInrMarket.getReleventDepth());
    console.log(USDTInrMarket.getReleventDepth());
    console.log(solUSDTMarket.getReleventDepth());
},3000);