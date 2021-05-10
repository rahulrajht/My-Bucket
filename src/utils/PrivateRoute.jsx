import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ path, component }) {
  const isUserLogin = JSON.parse(localStorage.getItem("isUserLogin"));

  return isUserLogin ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to={{ pathname: "/login", state: { from: path } }} />
  );
}
