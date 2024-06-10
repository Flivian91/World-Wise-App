import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function authReducer(state, action) {
  switch (action.type) {
    case "login": {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    }
    case "logout": {
      return {
        ...state,
        isAuthenticated: false,
      };
    }

    default: {
      throw new Error("Unkwon Action");
    }
  }
}
const initialState = {
  user: null,
  isAuthenticated: false,
};
export default function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  const value = {
    user,
    isAuthenticated,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error(
      "You called the useAuth Custom Hook Outside the AuthProvider"
    );
  return context;
}
