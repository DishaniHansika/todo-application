import React,{useState} from "react";

const TodoAdd=(props)=>{
    const[input,setInput]=useState('');

    const handleChange= event =>{
        setInput(event.target.value);
    };

    const handleSubmit= event =>{
        event.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random()*10000), //generate an id for the todo
            text:input
        });

        setInput('');
    };

    return(
        <form className="todoform" onSubmit={handleSubmit}>
            <input  style={{paddingLeft:"15px"}} type="text" placeholder="Add a todo" value={input}
            onChange={handleChange}/>
            <button style={{margin:"10px"}}>Add Todo</button>
        </form>
    );

};

export default TodoAdd;