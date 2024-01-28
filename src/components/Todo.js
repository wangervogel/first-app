import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo({ id, todo, onDelete, onToggle, completed }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <Checkbox 
            checked={completed} 
            onChange={() => onToggle(id)} 
        />
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px'}}>
            <Typography 
                variant="body1" 
                style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >
                {todo}
            </Typography>
            <IconButton onClick={() => onDelete(id)} aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </div>
      </div>
    );
}

export default Todo;
