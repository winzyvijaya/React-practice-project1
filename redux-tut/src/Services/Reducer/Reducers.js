import {ADD_TO_CART,REMOVE_TO_CART} from '../Constant'

const initialState ={
    cardData:[]
}
export default function cardItems(state=[], Actions){
    // console.warn("Reducers", Actions)
    switch (Actions.type){
        case ADD_TO_CART:
         return[
            ...state,
            {cardData: Actions.data}
        ]
        case REMOVE_TO_CART:
            state.pop();
         return[
            ...state,
           
        ]
         break; 
         default:
            return state 
    }
}

