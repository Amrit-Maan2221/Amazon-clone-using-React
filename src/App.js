import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path="/checkout"
            element={
              <>
                <Header />
                <h1>I am checkout</h1>
              </>
            }
          />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
