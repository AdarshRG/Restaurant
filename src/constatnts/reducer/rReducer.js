import { FAIL, SUCCESS } from "../restConstant";

//reducer function state
//                     state to store the payload working action
export const restReducer=(state={restList:[]},action)=>{

    switch(action.type){
        case SUCCESS:
            return{
            restList:action.payload
            }
        case FAIL:
            return{
            restList:action.payload
            }
            default:
                return state
    }

}