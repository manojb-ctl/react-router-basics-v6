import { Redirect, Route, Switch } from "react-router-dom";
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
        <Switch>
          {/* Redirect for redirect to other page.... */}
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>

          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>

          {/*  dynamic routing (/:productId).... */}
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome components
// our-domain.com/products => Products components
// our-domain.com/products/p1 (id) => ProductDetail components
