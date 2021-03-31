import "./styles.css";
import Nav from "./Nav";
import { useScreen } from "./changeScreen";
import Category from "./Category";
import { UrlProvider } from "./useUrl";
export default function App() {
  const { screen } = useScreen();
  return (
    <div className="App">
      <Nav />
      <UrlProvider>
        <div className="screen">
          <Category className="cat" />
          {screen}
        </div>
      </UrlProvider>
    </div>
  );
}
