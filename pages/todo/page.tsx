

import TodoHeader from "../../components/todo/TodoHeader";
import TodoEditor from "../../components/todo/TodoEditor";
import TodoList from "../../components/todo/TodoList";
import {useRef, useState} from "react";



const mockTodos : Todo[] = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        createdAt: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "리눅스 공부하기",
        createdAt: new Date().getTime(),
    },    {
        id: 2,
        isDone: false,
        content: "Java 공부하기",
        createdAt: new Date().getTime(),
    },    {
        id: 3,
        isDone: false,
        content: "Spring 공부하기",
        createdAt: new Date().getTime(),
    },
]

function todoPage() {

    const idRef = useRef<number>(4)

    const [todos, setTodos] = useState<Todo[]>(mockTodos)

    // const [todo, setTodo] = useState<Todo>()

    const onCreate = (content: Todo) => {
        const newItem:  Todo = {
            id: idRef.current,
            content: "test",
            isDone: false,
            createdAt: new Date().getTime(),
        }
        setTodos([newItem, ...todos])
        idRef.current += 1
    }

    const onUpdate = (targetId: number) => {
        setTodos(
            todos.map((it) =>
                it.id === targetId ? {...it, isDone: !it.isDone} : it
            )
        )
    }

    const onDelete = (targetId: number) => {
        setTodos(todos.filter((it) => it.id !== targetId))
    }

    return (
        <div className="TodoApp">
            <TodoHeader />
            <TodoEditor onCreate={onCreate} />
            <TodoList  todos={todos} onUpdate={onUpdate} />
        </div>
    )
}

export default todoPage