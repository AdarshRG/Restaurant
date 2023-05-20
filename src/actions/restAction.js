import axios from "axios";
import { FAIL, SUCCESS } from "../constatnts/restConstant";

//api to access all restaurant data
//ndelm error verum apo call so method called try and catch method,if tryil error then catch work

export const getRestaurants=async (dispatch)=>{
    try{
        
        const {data} =await axios.get('/restaurants.json')
        console.log(data.restaurants);
        dispatch(
            {
                payload:data.restaurants,
                type:SUCCESS
            }
        )
    }
    catch(err){
        dispatch(
            {
                payload:err,
                type:FAIL
            }
        )

    }
}