import { useEffect, useState } from "react";
import "../Agregar/styles.css"


function Agregar (){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [creation, setCreation] = useState("");
    const [todos, setTodos] = useState([]);


    //consultar que es esto
    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    //consultar que es esto
    const handleSubmit = (e) => {
        e.preventDefault(); 
    
        const newTodo = { title, description, creation };

        const updatedTodos = [...todos, newTodo];

        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    
        setTitle("");
        setDescription("");
        setCreation("");

        setTodos(updatedTodos);

        window.location.href = "/";
    };


    return(
        <div>
            <h1>NEW TODO</h1>
            <form className={"forms"} onSubmit={handleSubmit}>
                <label>TODO TITLE: </label><br />
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
                
                <label>TODO DESCRIPTION: </label><br />
                <input type="descripcion" value={description} onChange={(e) => setDescription(e.target.value)} /><br />

                <label>TODO CREATION TIME: </label><br />
                <input type="date" value={creation} onChange={(e) => setCreation(e.target.value)}/><br />
                <button type="submit">SAVE</button>
            </form>
        </div>

        
    )
}

export default Agregar;