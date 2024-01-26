import axios from "axios";

export class DepthManager{
        private market: string;
        private bids:{
            [key:string]:string
        };
        private asks:{
            [key:string]:string
        };
        constructor(market:string){
            this.market = market;
            this.asks = {};
            this.bids = {};
            setInterval(()=>{
                this.pollMarket();
            },3000)
        }

        async pollMarket(){
            const depth = await axios.get(`https://public.coindcx.com/market_data/orderbook?pair=${this.market}`);
            this.bids = depth.data.bids;
            this.asks = depth.data.asks;
        }

        async getReleventDepth(){
            
            let highestBid = -100;
            let lowestAsk = 100000;

            Object.keys(this.bids).map((bid)=>{
                if(parseFloat(bid)>highestBid){
                    highestBid = parseFloat(this.bids[bid]);
                }
            })
            Object.keys(this.asks).map((ask)=>{
                if(parseFloat(ask)<lowestAsk){
                    lowestAsk = parseFloat(this.asks[ask]);
                }
            })
            return {
                highestBid,
                lowestAsk
            }
        }

}