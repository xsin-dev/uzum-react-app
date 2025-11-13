import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { ContextProvider } from "./context";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/:id" element={<DetailPage />}/>
        </Route>
      </Routes>
    </ContextProvider>
  );
};

export default App;
