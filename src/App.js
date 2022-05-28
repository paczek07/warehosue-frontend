import './App.css';
import Login from './routes/Login'
import Home from './routes/Home'
import { useSelector } from 'react-redux';

function App() {
  const loggedIn = useSelector((state) => state.login.isLoggedIn)
  return (
    <div >
      {loggedIn && <Home/>}
      {!loggedIn && <Login/>}
    </div>
  );
}

export default App;
