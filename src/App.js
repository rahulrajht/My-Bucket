import "./styles.css";
import { Route, Switch } from "react-router-dom";
import { Cart, Product, WishListCart, Error, Nav, UrlProvider } from "./index";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./components/Login";
import Account from "./components/Account";
export default function App() {
  return (
    <div className="App">
      <UrlProvider>
        <Nav />
        <Switch>
          <Route exact path="/" component={Product} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/wishlist" component={WishListCart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={Account} />
          <Route exact path="*" component={Error} />
        </Switch>
      </UrlProvider>
    </div>
  );
}
