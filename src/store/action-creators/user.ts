//Получение данных о пользователе с сервера 

import axios from "axios"
import { Dispatch } from "react"
import { UserAction, UserActionTypes } from "../../types/user"

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            //Вызываем dispatch отлова пользователей
            dispatch({type: UserActionTypes.FETCH_USERS})
            //Получаем данные с сервера с помощью axios
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            //Загрузка
            setTimeout(() => {
                //Вызываем dispatch и помещаем в payload полученные данные
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
            }, 500)
        }catch(e){
            //Вызываем dispatch ошибки загрузки
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Ошибка загрузки пользователей'
            })
        }
    }
}