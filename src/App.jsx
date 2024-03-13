import './App.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Item from './components/Items/item';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <div>
      <h1>TODO LIST</h1>
      <div>
        {todos.map((todo, index) => (
          <Item to={`/Detalle/${index+1}`} title={todo.title} />
        ))}
      </div>

      <div className={'button'}> <Link to={'/agregar'}> <button>NEW TODO</button> </Link> </div>
    </div>
  );
}

export default App;