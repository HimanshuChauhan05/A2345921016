import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Allproducts from "./routs/Allproducts";
import ProductDetail from "./routs/ProductDetail";


const App = () => {
    return (
      // <Router>
      //   <Routes>
      //     <Route path="/" component={Allproducts} />
      //     <Route path="/about" component={ProductDetail} />
      //   </Routes>
      // </Router>
      <Allproducts />
    )
};

export default App;
