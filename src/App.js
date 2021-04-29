import "./styles.css";
import { Route, Switch } from "react-router-dom";
import { Cart, Product, WishListCart, Error, Nav, UrlProvider } from "./index";

export default function App() {
  return (
    <div className="App">
      <UrlProvider>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Product />
          </Route>
          <Route exact path="/cart">
            <Nav />
            <Cart />
          </Route>
          <Route exact path="/wishlist">
            <Nav />
            <WishListCart />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
      </UrlProvider>
    </div>
  );
}
