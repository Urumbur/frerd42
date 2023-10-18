import Wrapper from './components/Wrapper/Wrapper';
import store from './store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
};

export default App;
