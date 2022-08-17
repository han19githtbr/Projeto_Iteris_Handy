import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './App.css';
import Add from "./components/add";
import List from "./components/list";
import Update from "./components/update";
import Cart from "./components/cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
        <Routes>

          <Route exact path="/add" element={<Add />}></Route>
          <Route exact path="/" element={<List />}></Route>
          <Route exact path="/update/:id" element={<Update />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>

        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
