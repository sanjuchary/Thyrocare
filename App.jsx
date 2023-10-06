/* eslint-disable react/react-in-jsx-scope */
import {Provider} from 'react-redux';
import store from './redux/store';
import MainNavigation from './Navigation/MainNavigation';
import HomeNav from './Navigation/HomeNav';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
