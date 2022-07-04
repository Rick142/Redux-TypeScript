//Получение данных о списке дел с сервера 

import axios from "axios"
import { Dispatch } from "react"
import { TodoAction, TodoActionTypes } from "../../types/todo"


export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try{
            //Вызываем dispatch отлова задач
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            //Получаем данные с сервера с помощью axios
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            //Загрузка
            setTimeout(() => {
                //Вызываем dispatch и помещаем в payload полученные данные
                dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
            }, 500)
        }catch(e){
            //Вызываем dispatch ошибки загрузки
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Ошибка загрузки списка дел'
            })
        }
    }
}

export const setTodoPage = (page: number): TodoAction => {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}