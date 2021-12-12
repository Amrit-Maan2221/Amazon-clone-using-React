import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useEffect } from 'react';
import { auth } from './Components/firebase';
import { useStateValue } from './Components/StateProvider';
import Payment from './Components/Payment';




function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<>
            <Header />
            <Home />
          </>} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<>
            <Header />
            <Checkout />
          </>} />
          <Route path="/payment" element={<>
            <Header />
            <Payment />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
