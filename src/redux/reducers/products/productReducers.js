import { GET_PRODUCTS } from "../../types/products/productsType";

const initialState={
    products:[]
}


const ProductReducers=(state=initialState,action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state,
                products:action.payload
            }
    
        default:
            return state
    }
}

export default ProductReducers;