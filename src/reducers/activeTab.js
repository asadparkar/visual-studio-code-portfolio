const initialState = 1

const changeTabState = (state=initialState, action)=>{
    switch(action.type){
        case 'ACTIVE_TAB' : return state = action.payload
        default : return state
    }
}

export default changeTabState;