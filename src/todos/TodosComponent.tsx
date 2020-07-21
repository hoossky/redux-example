//input 하나 button 하나
import React,{useState} from 'react';

const TodosComponent = ({todo, onToggle, onRemove}) => {
    return (
        <>
            <input type="checkbox"
                   onClick={()=>onToggle(todo.id)}
                   checked={todo.done}
                   readOnly={true}/>
                   <span style={{textDecoration: todo.done ? 'Line-through':'none'}}>
                       {todo.text}
                   </span>
                   <button onClick={()=> onRemove(todo.id)}>삭제</button>
            </>
    )
};
const Todos = ({
    input, // 인풋에 입력되는 텍스트
    todos, // 할 일 목록이 들어 있는 객체
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) => {
    const onSubmit = e => {
        e.preventDefault()
        onInsert(input)
        onChangeInput('') // 등록 후 인풋 초기화
    }
    const onChange = e => {
        onChangeInput(e.target.value)
    }
    return (
        <div>
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={input} onChange={onChange}/>
                <button type={"submit"}>등록</button>
            </form>
        </div>
    {todos.map(todo => {
        <TodoItem> todo={todo} key={todo.id}
            onToggle={onToggle},
            onRemove={onRemove}/>)
    })}


export default Todos;

