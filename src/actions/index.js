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


// export const showAlert=(message,alertType,timeOut=1000)=>dispatch=>{
//     dispatch({type:"SETALERT",payload:{message,alertType}})
//     setTimeout(()=>{dispatch({type:"REMOVEALERT"})},timeOut)
// }
// export const setGuest=()=>dispatch=>{
//     dispatch({type:"SETGUEST"})
// }
// just adding this to remind go like above !
