import React,{useState} from "react";


const Todo=(props)=>{ 
    const {todo}=props;
    const {text}=todo;
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return(
        <>{checked ? null:
            (<div style={{backgroundColor:"lightgrey", margin:"25px", padding:"10px",width:"150px"}}>
                <h4>{text}</h4>
                <div>
                    <input type="checkbox" checked={checked} onChange={handleChange}/>
                </div>
            </div> )
        }</>
            
    )
};

export default Todo;