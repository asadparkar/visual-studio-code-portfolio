var initalState = 0
const changeActiveSkill = (state = initalState, action)=>{
    switch(action.type){
        case 'ACTIVE_SKILL' : return state = action.payload
        default : return state
    }
}
export default changeActiveSkill;