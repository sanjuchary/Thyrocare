import {ForgetPassword, LogInPage, RegisterPage} from './Screens/Registration';
import RegisterNav from './Navigation/RegisterStack';
import HomeNav from './Navigation/HomeNav';

const App = () => {
  const user = false;
  return user ? <HomeNav /> : <RegisterNav />;
};

export default App;
