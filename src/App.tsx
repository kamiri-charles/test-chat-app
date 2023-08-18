import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import './App.scss';
import SignIn from './components/SignIn';
import Home from './components/Home';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;