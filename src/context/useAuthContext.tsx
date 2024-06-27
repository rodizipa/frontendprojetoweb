import {useLocalStorage} from "../hooks/useLocalStorage.ts";
import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {loginAPI, registerAPI} from "../service/AuthService.ts";
import axios from "axios";


export type Account = {
  token: string | null;
  registerUser: (username: string, password: string, displayName: string) => void;
  loginUser: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
}

type Props = { children: ReactNode };
const UserContext = createContext<Account>({} as Account);

export const AccountProvider = ({children}: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage<string>("token", "");
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    if (token !== "") {
      setToken(token);
      axios.defaults.headers.common.authorization = `Bearer ${token}`;
    }
    setReady(true);
  }, []);

  const registerUser = async (
      username: string,
      password: string,
      displayName: string
  ) => {
    await registerAPI(username, password, displayName).then(res => {
      if (res) {
        navigate("/login", {replace: true});
      }
    });
  }

  const isLoggedIn = ():boolean => (token != null && token != "")

  const logout = () => {
    setToken("");
    navigate("/");
  }

  const loginUser = async (username: string, password: string) => {
    await loginAPI(username, password).then((res) => {
      if (res) {
        setToken(res?.data.token)
        navigate("/")
      }
    });
  }

  return (
        <UserContext.Provider value={{loginUser, token, logout, registerUser, isLoggedIn}}>
          {isReady ? children : null}
        </UserContext.Provider>
    )
}

export const useAuth = () => useContext(UserContext);

