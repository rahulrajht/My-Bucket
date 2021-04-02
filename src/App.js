import "./styles.css";
import Nav from "./components/Nav";
import { useScreen } from "./context/changeScreen";
import { UrlProvider } from "./context/useUrl";
export default function App() {
  const { screen } = useScreen();
  return (
    <div className="App">
      <UrlProvider>
        <Nav />

        <div className="screen">{screen}</div>
      </UrlProvider>
    </div>
  );
}
