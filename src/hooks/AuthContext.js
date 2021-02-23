import React, { useContext, useState } from "react";
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

import api from "../services/api";

const initialAuthValues = {
  userId: 0,
  name: '',
  email: '',
  signed: false,
  token: '',
};

const AuthContext = React.createContext({
  auth: initialAuthValues,
  handleLogin: async () => {},
  handleRegister: async () => {},
  handleResetAuth: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuthValues);
  
  const handleLogin = async (loginUser) => {
    try{
      const { data } = await api.post(`login`, loginUser);
      
      setAuth({
        userId: data.payload.user.id,
        name: data.payload.user.name,
        email: data.payload.user.email,
        signed: true,
        token: data.payload.token,
      });
    }catch (error) {
      Toast.show({
        type : 'error',
        text1: 'Ops!',
        text2: error.response?.data?.message === 'Invalid password' ? 'Senha inválida' : 'Usuário não encontrado',
        autoHide: true,
        topOffset: Number(StatusBar.currentHeight + 70),
      });
    }
  };

  const handleRegister = async (createUser) => {
    try {
      const { data } = await api.post(`signup`, createUser);

      setAuth({
        userId: data.payload.user.id,
        name: data.payload.user.name,
        email: data.payload.user.email,
        signed: true,
        token: data.payload.token,
      });

    }catch (error) {
      Toast.show({
        type : 'error',
        text1: 'Ops!',
        text2: 'Email já registrado',
        autoHide: true,
        topOffset: Number(StatusBar.currentHeight + 70),
      });
    }
  };

  const handleResetAuth = () => { setAuth(initialAuthValues)}

  const values = {
    auth,
    // Functions
    handleLogin,
    handleRegister,
    handleResetAuth,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};
