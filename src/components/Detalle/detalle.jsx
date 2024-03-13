import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Detalle/styles.css"


    function Detalle (){
        const { id } = useParams();
        const [todos, setTodos] = useState([]);
        const [todoSelected, setTodoSelected] = useState(null);
    
        useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            const parsedTodos = JSON.parse(storedTodos);
            setTodos(parsedTodos);
    

            const selectedIndex = parseInt(id) - 1;
            const selectedTodo = parsedTodos[selectedIndex];
            setTodoSelected(selectedTodo);
        }
        }, [id]);
    
        const back = () => {
        window.location.href = "/";
        }
    
        return (
        <div>
            {todoSelected ? (
            <div>
                <h1>{todoSelected.title}</h1>
                <p>TODO DESCRIPTION: {todoSelected.description}</p>
                <p>TODO CREATION TIME: : {todoSelected.creation}</p>
                <button onClick={back}>atras</button>
            </div>
            ) : (
            <p>No se encontró el elemento que elegiste</p>
            )}
        </div>
        );
    }

    export default Detalle;