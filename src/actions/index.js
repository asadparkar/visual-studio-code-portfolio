export const changeState = (num)=>{
    return {
        type:'ACTIVE_TAB',
        payload:num
    };
};

export const changeSkill = (num)=>{
    return {
        type:'ACTIVE_SKILL',
        payload:num
    }
}

export const changeFile = (section)=>{
    return{
        type:'FILE_TOGGLE',
        payload:section
    }
}