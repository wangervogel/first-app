import Todo from './Todo';
import { useState } from 'react';

let id = 1;

function Todos() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]); 
    const renderedTodos = todos.map((todo) => {
        return <Todo key={todo.id} todo={todo.text} />
    });
    const handleSubmit = () => {
        todos.push(
            setTodos([...todos, { id: id++, text: inputValue }])
        );
    };
    
    return (
        <div>
            <ul>
                {renderedTodos}
            </ul>
            Input your todo: <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
}

export default Todos;