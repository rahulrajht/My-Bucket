import "./styles.css";
import Nav from "./components/Nav";
import { UrlProvider } from "./context/useUrl";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Product from "./components/Product";
import WIshListCart from "./components/WishListCart";

export default function App() {
  return (
    <div className="App">
      <UrlProvider>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Product />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/wishlist">
            <WIshListCart />
          </Route>
        </Switch>
      </UrlProvider>
    </div>
  );
}
