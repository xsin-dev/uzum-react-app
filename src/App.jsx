import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "./context";
import Layout from "./components/Layout";
import Home from "./pages/Home";



const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <Context.Provider value={{ cart, setCart }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Context.Provider>
  );
};

export default App;
