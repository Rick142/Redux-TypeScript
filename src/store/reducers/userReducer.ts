//Reducer взаимодействия со списком пользователей

import {UserAction, UserState, UserActionTypes} from '../../types/user';

//Состояние. Указываем интерфейс, созданный выше.
const initialState: UserState = {
    users: [],//Список пользователей
    loading: false,//Состояние загрузки
    error: null//Сообщение об ошибке
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch(action.type){
        //Подгрузка пользователей
        case UserActionTypes.FETCH_USERS:
            return {loading: true, error: null, users: []}
        //Пользователи успешно загрузились
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        //Произошла ошибка
        case UserActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state;
    }
}