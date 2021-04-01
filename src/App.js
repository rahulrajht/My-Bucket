import "./styles.css";
import Nav from "./Nav";
import { useScreen } from "./changeScreen";
import { UrlProvider } from "./useUrl";
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
