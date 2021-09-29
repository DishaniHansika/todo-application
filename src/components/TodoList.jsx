import React,{useState} from "react";
import TodoAdd from "./TodoAdd";
import Todo from "./Todo";

const TodoList=()=>{
    const[todos,setTodos]=useState([]);

    const addTodo=todo=>{
        const updatedTodos=[todo,...todos]
        setTodos(updatedTodos);

    };
    
    return(
        <div>
            <h3>TODO List</h3>
            <TodoAdd onSubmit={addTodo}/>
            <div style={{display:"flex",flexWrap:"wrap"}}>{todos.map((todo=>(<Todo key={todo.id} todo={todo}/>)))}</div>
        </div>
    );
}

export default TodoList;