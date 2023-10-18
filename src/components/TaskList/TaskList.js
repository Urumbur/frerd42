import React from 'react';
import './TaskList.module.scss';
import { Task } from '../index';
import { useSelector } from 'react-redux';
import { Box, List, Typography } from '@mui/material';
import styles from './TaskList.module.scss';

export const TaskList = (props) => {
  const todos = useSelector((state) => state.todos);

  const active = todos.filter((task) => !task.completed);
  const done = todos.filter((task) => task.completed);
  const activeTasks = active.map((task) => <Task key={task.id} task={task} />);
  const doneTasks = done.map((task) => <Task key={task.id} task={task} />);

  return (
    <Box className={styles.list}>
      <Typography variant='h4'>
        {activeTasks.length > 0
          ? `Zadania do zrobienia (${activeTasks.length})`
          : 'Brak aktywnych zadań!!!'}
      </Typography>
      <List>
        {activeTasks}
        {doneTasks}
      </List>
    </Box>
  );
};
