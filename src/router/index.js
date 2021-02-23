import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NotSignedRouter from "./NotSigned/notSigned.route";
import SignedRouter from "./Signed/signed.route";
import { useAuthContext } from "../hooks/AuthContext";

const Router = () => {
  const { auth } = useAuthContext();
  return (
    <NavigationContainer>
      {auth.signed ? <SignedRouter /> : <NotSignedRouter />}
    </NavigationContainer>
  );
};
  
export default Router;