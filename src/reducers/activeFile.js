var initalState = false
const changeFileState = (state = initalState,action)=>{
    switch(action.type){
        case 'FILE_TOGGLE':
            if (action.payload === 'body'){
                return state = false
            } else{
                return state = !state
            }
        default: return state;
    }
}

export default changeFileState;