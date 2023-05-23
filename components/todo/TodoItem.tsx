import {FC} from "react";

interface TodoProps {
    id: number,
    isDone: boolean,
    content: string,
    createdAt: number,
    onUpdate: (id:number) => void,

}

const TodoItem:FC<TodoProps> = ({id, isDone, content, createdAt, onUpdate}) => {

    const onChangeCheckbox = () => {
        onUpdate(id)
    }

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">{new Date(createdAt).toLocaleDateString()}</div>
            <div className="btn_col">
                <button>삭제</button>
            </div>
        </div>
    )
}

export default TodoItem