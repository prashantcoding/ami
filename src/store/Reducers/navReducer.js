const nav_title_reducer=(title="chroma",action)=>{
    switch (action.type){
        case 'new_title':{
            return title=action.payload;
        }
        default:
            return title;
        }
    }

export default nav_title_reducer;