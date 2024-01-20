function Todo({ id, todo, onDelete }) {
    return (
        <li>
            {todo} <button onClick={() => onDelete(id)}>Delete</button>
        </li>
    );
}

export default Todo;
