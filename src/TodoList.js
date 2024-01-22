import Todo from './Todo';
import { useState } from 'react';
import { v4 as uudiv4 } from 'uuid';

function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    
    //Todoリストの削除
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Todoからリストを作成
    const renderedTodos = todos.map((todo) => {
        return <Todo key={todo.id} id={todo.id} todo={todo.text} onDelete={deleteTodo} />
    });
    
    const handleSubmit = () => {
        // uuidを使って一意のIDを生成
        const uniqueId = uudiv4();
        setTodos([...todos, { id: uniqueId, text: inputValue }]);
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

export default TodoList;