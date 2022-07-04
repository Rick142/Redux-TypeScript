//Компонент - список с пользователями
import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypesSelector } from "../hooks/useTypesSelector";

const UserList: React.FC = () => {
    //Выцепляем состояния с помощью useTypesSelector - нашего кастомного хука
    const {users, error, loading} = useTypesSelector(state => state.user)
    //Вызываем созданный нами хук useActions
    const {fetchUsers} = useActions()

    //Загружаем данные с сервера
    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading){
        return <h1>Идёт загрузка...</h1>
    }

    if (error){
        return <h1>{error}</h1>
    }

    return (
        <div>
            {/*Из store берём пользователей и выводим*/}
            {users.map(user => 
                <div key={user.id}>{user.name}</div>
                )}
        </div>
    )
}

export default UserList;