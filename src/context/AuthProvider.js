import { createContext, useContext, useReducer } from "react";
import { data, reducer } from "./useAuthReducer";
import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [{ user, isUserLogin }, dispatch] = useReducer(reducer, data);

  function SignUp(name, email, password) {
    const url = "https://api-1.rahulgupta99.repl.co/api/user/register";
    return axios.post(url, { name, email, password });
  }

  function Login(email, password) {
    const url = "https://api-1.rahulgupta99.repl.co/api/user/login";
    return axios.post(url, { email: email, password: password });
  }

  function logout() {
    localStorage.clear("token");
    localStorage.clear("email");
    localStorage.clear("name");
    localStorage.clear("isUserLogin");
  }

  return (
    <AuthContext.Provider
      value={{
        SignUp,
        Login,
        user,
        isUserLogin,
        logout,
        dispatchData: dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
