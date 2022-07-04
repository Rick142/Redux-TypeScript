//Компонент - список задач
import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypesSelector } from "../hooks/useTypesSelector";

const TodoList: React.FC = () => {
    //Выцепляем состояния с помощью useTypesSelector - нашего кастомного хука
    const {page, error, loading, todos, limit} = useTypesSelector(state => state.todo)
    //Вызываем созданный нами хук useActions
    const {fetchTodos, setTodoPage} = useActions()
    //Пагинация
    const pages = [1,2,3,4,5];



    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading){
        return <h1>Идёт загрузка...</h1>
    }

    if (error){
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo => 
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
            <div style={{display: 'flex'}}>
                {pages.map(p => 
                    <div
                        onClick={() => setTodoPage(p)}
                        style={{border:p === page ? '2px solid green' : '1px solid gray', padding: 10}}
                        >
                            {p}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TodoList;