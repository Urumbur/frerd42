import React, { useState } from 'react';
import styles from './Form.module.scss';
import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';

export const Form = (props) => {
  const [taskName, addTaskName] = useState('');
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (taskName) {
      dispatch(
        addTodo({
          title: taskName,
        }),
      );
      addTaskName('');
    }
  };

  return (
    <Box className={styles.newTask}>
      <Typography className={styles.title} variant='h3'>
        Lista zadań
      </Typography>
      <form>
        <Box className={styles.form}>
          <TextField
            className={styles.input}
            variant='standard'
            InputProps={{
              disableUnderline: true,
            }}
            type='text'
            placeholder='Wpisz zadanie...'
            value={taskName}
            onChange={(e) => addTaskName(e.target.value)}
          />
          <Button
            className={styles.button}
            variant='contained'
            startIcon={<AddIcon />}
            onClick={(e) => handleClick(e)}
          >
            Dodaj zadanie
          </Button>
        </Box>
      </form>
      <Divider />
    </Box>
  );
};
