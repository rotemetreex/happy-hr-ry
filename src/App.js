import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import Services from './pages/Services.js';
import Products from './pages/Products.js';
import ContactUs from './pages/ContactUs.js';
import Marketing from './pages/Marketing.js';
import SignUp from './pages/SignUp.js';
import Navbar from './components/navbar/Navbar.js';
import { useState } from 'react';

function App() {

  const [results, setResults] = useState([]);
  const [chosenDrink, setChosenDrink] = useState({});
  const [chosenDrinkId, setChosenDrinkId] = useState('');
  console.log(chosenDrink);
  console.log(chosenDrinkId);


  return (
    <Router>

      <Navbar
      results={results}
      setResults={setResults}
      chosenDrink={chosenDrink}
      setChosenDrink={setChosenDrink}
      chosenDrinkId={chosenDrinkId}
      setChosenDrinkId={setChosenDrinkId}
      />

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/services" element={<Services />} />

        <Route path="/products" element={<Products/>} 
        chosenDrink={chosenDrink}
        chosenDrinkId={chosenDrinkId}
        setChosenDrinkId={setChosenDrinkId} />

        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/marketing" element={<Marketing />} />

        <Route path="/sign-up" element={<SignUp />} />

      </Routes>

    </Router>
    
  );
}

export default App;
