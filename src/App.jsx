import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { ContextProvider } from "./context";

const App = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
};

export default App;
