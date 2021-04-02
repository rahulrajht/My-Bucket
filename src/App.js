import "./styles.css";
import Nav from "./components/Nav";
import { useScreen } from "./context/changeScreen";
import { UrlProvider } from "./context/useUrl";
import Filter from "./components/Filter";
export default function App() {
  const { screen } = useScreen();
  return (
    <div className="App">
      <UrlProvider>
        {" "}
        <Nav />
        <Filter />
        <div className="screen">{screen}</div>
      </UrlProvider>
    </div>
  );
}
