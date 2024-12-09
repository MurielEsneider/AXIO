import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginExample from './Login';
import SignUpExample from './singUpExample';
import Recovery from './recovery';
import Recovery2 from './recovery2'
import Home from './page';
import Users from './users';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  console.log(location)

  return (
    <div className='contenedor'>
      <Routes location={background || location}>
        <Route index element={<LoginExample/>} />
        <Route path='/LoginExample' element={<LoginExample />} />
        <Route path='/SignUpExample' element={<SignUpExample />} />
        <Route path='/RecoveryPassword' element={<Recovery />} />
        <Route path='/RecoveryPassword2' element={<Recovery2 />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Users' element={<Users/>} />
      </Routes>
    </div>
  );
}

export default App;