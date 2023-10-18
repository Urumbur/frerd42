import { Form, TaskList } from '../index';
import { Box } from '@mui/material';
import styles from './Wrapper.module.scss';

const Wrapper = () => {
  return (
    <Box className={styles.backgroundApp}>
      <Box className={styles.container}>
        <Form />
        <TaskList />
      </Box>
    </Box>
  );
};

export default Wrapper;
