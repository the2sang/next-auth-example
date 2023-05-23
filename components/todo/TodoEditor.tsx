'use client'

import React, {useRef, useState} from "react";

interface CreateProps {
    onCreate: any
}

const TodoEditor: React.FC<CreateProps> = ({onCreate}) => {

    const [content, setContent] = useState<string>("")
    const inputRef = useRef<HTMLInputElement>(null);
    const onChangeContent = (e:React.ChangeEvent<HTMLInputElement>) => {
        // alert('add')
        console.log(e.target.value)
        setContent(e.target.value)
    }

    const onSubmit = () => {
        if (!content) {
            inputRef.current?.focus()
            return
        }
        onCreate(content);
        setContent("")
    }

    const onKeyDown = (e: any) => {
        if (e.key === "Enter") {
            onSubmit()
        }
    }


    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기</h4>
            <div className="editor_wrapper">
                <input
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                    placeholder="새로운 Todo..." />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}

export default TodoEditor