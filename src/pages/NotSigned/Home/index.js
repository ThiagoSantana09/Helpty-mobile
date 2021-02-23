import React from "react";
import { useNavigation } from "@react-navigation/native";

import * as Styles from "./styles";

import Button from "../../../components/Button";

import bgAuth from "../../../../assets/images/background.png";
import logo from "../../../../assets/images/logo_white.png";

const Home = () => {
  const navigation = useNavigation();

  return (
    <Styles.Background source={bgAuth} resizeMode="stretch">
      <Styles.Wrapper>
        <Styles.ImgLogo source={logo}/>
        <Styles.Content>
          <Styles.Info>Multiserviços para <Styles.Info color="#E55F72">facilitar</Styles.Info> sua vida</Styles.Info>
          <Styles.ContentButton>
            <Button label="Login" onPress={() => navigation.navigate("Login")}/>
          </Styles.ContentButton >
          <Styles.GroupRegister  onStartShouldSetResponder={() => navigation.navigate("Signup")}>
            <Styles.TextRegister>Não tem conta? </Styles.TextRegister>
            <Styles.TextRegister underline strong>Cadastre-se</Styles.TextRegister> 
          </Styles.GroupRegister>
        </Styles.Content>
      </Styles.Wrapper>
    </Styles.Background>
  );
};

export default Home;