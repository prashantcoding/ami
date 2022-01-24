const price_reducer=(price=0,action)=>{
    switch(action.type){
        case 'add_price':{
            return price+action.payload;
            
        }
        case 'remove_price':{
            return price-action.payload
        }
        default:{
                return price;
        }
    }
}
export default price_reducer;