import { Navigate, Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Routes>
          {/* Redirect to welcome page */}
          <Route path="/" element={<Navigate replace to="/welcome" />} />

          <Route path="/welcome/*" element={<Welcome />}>
            {/* Nested Routes.... */}
            <Route path="new-user" element={<p>Welcome new User!</p>} />
          </Route>

          <Route path="/products" element={<Products />} />

          {/*  dynamic routing (/:productId).... */}
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome components
// our-domain.com/products => Products components
// our-domain.com/products/p1 (id) => ProductDetail components
