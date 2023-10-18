import React from 'react';
import styles from './Task.module.scss';
import { IconButton, ListItem, ListItemButton, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../../store/todoSlice';

export const Task = (props) => {
  const { id, completed, title } = props.task;
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <ListItem
      className={`${styles.listItem} ${completed && styles.noActive}`}
      secondaryAction={
        <IconButton onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton onClick={handleCompleteClick}>
        <ListItemText className={completed && styles['noActive--text']} primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
