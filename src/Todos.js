import Todo from './Todo';
import { useState } from 'react';

let id = 1;

function Todos() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    
    //Todoリストの削除
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };


    const renderedTodos = todos.map((todo) => {
        return <Todo key={todo.id} id={todo.id} todo={todo.text} onDelete={deleteTodo} />
    });
    
    const handleSubmit = () => {
        setTodos([...todos, { id: id++, text: inputValue }]);
        setInputValue('');
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