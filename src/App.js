import "./styles.css";
import Nav from "./components/Nav";
import { useScreen } from "./context/changeScreen";
import { UrlProvider } from "./context/useUrl";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Product from "./components/Product";
export default function App() {
  const { screen } = useScreen();
  return (
    <div className="App">
      <UrlProvider>
        {" "}
        <Nav />
        <Switch>
          <Route exact path="/">
            <Product />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </UrlProvider>
    </div>
  );
}
