import Todo from './Todo';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TextField, Button, List, ListItem, Box } from '@mui/material';
import { auth, db } from "../lib/firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs } from "firebase/firestore";

function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [user] = useAuthState(auth)
    const [allTodos, setAllTodos] = useState([]);

    const getAllTodos = async() => {
        const querySnapshot = await getDocs(collection(db, "todos"));
        const allTodos = querySnapshot.docs.map((doc) => {
            return doc.data();
        });

        setAllTodos(allTodos);
        console.log(allTodos);
    }

    useEffect(() => {
        getAllTodos();
    }, [])

    //Todoリストのチェックボックス動作
    const toggleTodo = (id) => {
        //チェックボックスの真偽値を反転させて、完了/解除の動作をする
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    //Todoリストの削除
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };


    const renderedTodos = allTodos.map((todo) => {
        return (
            <ListItem key={todo.id}>
                <Todo
                    id={todo.id}
                    todo={todo.name}
                    onDelete={deleteTodo}
                    onToggle={toggleTodo}
                    completed={todo.completed}
                />
            </ListItem>
        );
    });
    
    const handleSubmit = () => {
        // uuidv4で一意のIDを生成
        const uniqueId = uuidv4();
        setTodos([...todos, { id: uniqueId, text: inputValue, completed: false }]);
        setInputValue(''); //Todoリストの追加後、フォームを空にする
    };
    
    return (
        <div>
            <List>
                {renderedTodos}
            </List>
            <Box display="flex" alignItems="center" margin="normal">

                <TextField 
                    label="Input your todo" 
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)} 
                    variant="outlined" 
                    margin="normal"
                    sx={{ mr: 2 }}
                />
                <Button 
                    onClick={handleSubmit} 
                    variant="contained" 
                    color="primary"
                >
                    Add
                </Button>
            </Box>
        </div>
    );
}

export default TodoList;