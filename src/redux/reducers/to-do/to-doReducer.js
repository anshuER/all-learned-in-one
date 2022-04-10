import { ADD_TO_LIST } from "../../types/to-do/to-doTypes";

const InitialValue={
    list:[]
}

export const toDoReducer=(state=InitialValue,action)=>{
    switch (action.type) {
        case ADD_TO_LIST:
            return{
                ...state,
                list:[...state.list,action.payload]
            }
    
        default:
            return state
    }
}