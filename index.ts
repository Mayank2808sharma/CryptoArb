import axios from 'axios';
import { DepthManager } from './DepthManager';


const solInrMarket = new DepthManager("B-SOL_INR");

const USDTInrMarket = new DepthManager("B-USDT_INR");

const solUSDTMarket = new DepthManager("B-SOL_USDT");


setInterval(()=>{
    console.log(solInrMarket.getReleventDepth());
    console.log(USDTInrMarket.getReleventDepth());
    console.log(solUSDTMarket.getReleventDepth());

    // sell SOL for INR, buy USDT form INR, buy SOL from USDT
    const solINR = solInrMarket.getReleventDepth().highestBid - 0.001;
    const USDTINR = USDTInrMarket.getReleventDepth().lowestAsk;
    const solUSDT = solUSDTMarket.getReleventDepth().lowestAsk;

    console.log(solINR,USDTINR,solUSDT);
},3000);