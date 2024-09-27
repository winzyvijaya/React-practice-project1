import {ADD_TO_CART} from '../Constant'
export const addToCart=(data)=>{
    // console.warn("Actions",data)
    return{
        type:"ADD_TO_CART",
        data:data
    }
}
export const removeToCart=(data)=>{
    console.warn("Actions")
    return{
        type:"REMOVE_TO_CART",
        
    }
}


// export const removeToCart=(data)=>{
//     return{
//         type:'REMOVE_TO_CART',
//         data:data
//     }
// }
