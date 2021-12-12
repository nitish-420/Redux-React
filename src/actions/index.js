export const incNumber=(num)=>{
    return {
        type:"INCREMENT",
        payload:num
    }
}
export const decNumber=(num)=>{
    return {
        type:"DECREMENT",
        payload : num
    }
}

export const resetNumber=(num)=>{
    return {
        type:"RESET",
        payload :num
    }
}