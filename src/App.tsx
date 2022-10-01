import React from "react";
import {Container} from 'react-bootstrap'
import {Routes, Route} from 'react-router-dom'
import Navbar from './layout/Navbar'
import About from "./pages/About";
import Home from "./pages/Home";
import Stroe from "./pages/Stroe";
import { ProductContextProvider } from "./context/ProductContext";
function App() {
  return (
    <ProductContextProvider>
    <Navbar />
    <Container>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/store" element={<Stroe/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Container>
    </ProductContextProvider>
  );
}

export default App;