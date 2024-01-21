function Todo({ id, todo, onDelete, onToggle, completed }) {
    return (
        <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={completed} onChange={() => onToggle(id)} />
            {todo}
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}

export default Todo;
