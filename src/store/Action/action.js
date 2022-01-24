export const add_price=(amount)=>{
    return (dispatch)=>{
       dispatch({
        type:'add_price',
        payload:amount,
       })
    }
}
export const remove_price=(amount)=>{
    return(dispatch)=>{
        dispatch({
         type:'remove_price',
         payload:amount,
        })
     }
}
export const show_category=(category)=>{
    return(dispatch)=>{
        dispatch({
         type:'particular_category',
         payload:category,
        })
     }
    }
