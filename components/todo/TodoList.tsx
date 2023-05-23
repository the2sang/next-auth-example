import TodoItem from "./TodoItem";
import {useState} from "react";

interface TodoProps {
    todos: Todo[],
    onUpdate: (id:number) => void,
}


const TodoList:React.FC<TodoProps> = ({todos, onUpdate}) => {

    const [search, setSearch] = useState<string>("")
    const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const getSearchResult = ()  => {
        return search === ""
        ? todos
            : todos.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()))
    }




    return (
        <div className="TodoList">
            <h4>Todo List 🎗</h4>
            <input
                className="searchbar"
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">
                {getSearchResult().map((it: Todo) => (
                    <TodoItem key={it.id} {...it} onUpdate={onUpdate}/>
                ))}
            </div>
        </div>
    )
}

export default TodoList