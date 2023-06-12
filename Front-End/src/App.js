import './App.css';
import Home from './components/Home';
import {Link , Route , Routes ,BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import SignIn from './components/SignUp';
import Map from './components/Map';

function App() {
  return (
    
    <div className="App">
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/signup" element={<SignIn></SignIn>}></Route>
                    <Route path="/map" element={<Map></Map>}></Route>
                </Routes>
    </div>
  );
}

export default App;
