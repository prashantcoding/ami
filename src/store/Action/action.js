export const nav_title=(title)=>{
    return (dispatch)=>{
        dispatch({
            type:'new_title',
            payload:title,
        })
    }
}