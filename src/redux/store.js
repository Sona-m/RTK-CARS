import { configureStore } from "@reduxjs/toolkit";
import { formReducer  , changeName , changeCost} from "./slices/FormSlice";
import { carsReducer , addCar ,removeCar , changeTerm } from "./slices/CarsSlice";

const store = configureStore({
    reducer : {
        cars : carsReducer,
        form : formReducer
    }
})

export  {store , addCar , removeCar, changeTerm , changeCost , changeName};