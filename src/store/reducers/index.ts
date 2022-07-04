//Объдинение для всех Reduser

import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
})

//Экспортируем тип нашего Reducer
export type RootState = ReturnType<typeof rootReducer>