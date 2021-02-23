import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Keyboard } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import * as Yup from "yup";
import { Formik } from "formik";

import Icon from 'react-native-vector-icons/FontAwesome';

import * as Styles from "./styles";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

import { useAuthContext } from "../../../hooks/AuthContext";

import logo from "../../../../assets/images/logo_pink.png";


const Signup = () => {
  const navigation = useNavigation();
  const { handleRegister } = useAuthContext();

  const schemaValidate = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("Não é um e-mail válido").required("Campo obrigatório"),
    password: Yup.string().min(8, "A senha precisa ter no minimo 8 caracteres").required("Campo obrigatório")
  });

  const [modifyContent, setModifyContent] = useState({	marginTop: 49, marginBottom: 100});
  const [modifyLogo, setModifyLogo] = useState({x: 101, y: 75});
  const [modifySpacing, setModifySpacing] = useState({marginBottom: 81})

  useEffect(() =>{
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", keyboardDidHide);
    };
  },[])

  const keyboardDidShow = () =>{
    setModifyLogo({ x: 81, y:60 })
    setModifyContent({	marginTop: 25, marginBottom: 35})
    setModifySpacing({	marginBottom: 25})
  }

  const keyboardDidHide = () =>{
    setModifyLogo({ x: 101, y:75 })
    setModifyContent({	marginTop: 49, marginBottom: 100})
    setModifySpacing({ marginBottom: 81 })
  }

  return (
    <Styles.Container>
      <Styles.ContentLogo 
        style={{
          marginTop: modifyContent.marginTop,
          marginBottom: modifyContent.marginBottom
        }}  
      >
        <Styles.ImgLogo 
          source={logo} 
          style={{
            width: modifyLogo.x,
            height: modifyLogo.y
          }}
        />
      </Styles.ContentLogo>
      <Styles.Info style={{marginBottom: modifySpacing.marginBottom}}>Registre-se</Styles.Info>
      <Formik
          initialValues={{
            name: '',
            email: '',
            password: ''
          }}
          validationSchema={schemaValidate}
          enableReinitialize
          onSubmit={(values) => { handleRegister(values) }}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldTouched
          }) => (
            <KeyboardAvoidingView style={{flex: 1}}>
              <Styles.Wrapper>
                <Styles.GroupInput>
                  <Input
                    label="Name"
                    value={values.name}
                    icon={<Icon name="user" size={25} color="#CCC" />}
                    onChangeText={handleChange("name")}
                    onBlur={() => setFieldTouched("name", true)}
                    error={errors.name}
                    touched={touched.name}
                  />
                  <Input
                    label="Email"
                    value={values.email}
                    icon={<Icon name="envelope" size={21} color="#CCC" />}
                    onChangeText={handleChange("email")}
                    onBlur={() => setFieldTouched("email", true)}
                    error={errors.email}
                    touched={touched.email}
                  />
                  <Input
                    label="Senha"
                    textContentType="password"
                    secureTextEntry
                    icon={<Icon name="lock" size={25} color="#CCC" />}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={() => setFieldTouched('password', true)}
                    error={errors.password}
                    touched={touched.password}
                  />
                </Styles.GroupInput>
                <Button label="Entrar" icon  onPress={handleSubmit}/>
                <Styles.GroupRegister  onStartShouldSetResponder={() => navigation.navigate("Login")}>
                  <Styles.TextRegister>Tem conta? </Styles.TextRegister>
                  <Styles.TextRegister underline strong>Entre</Styles.TextRegister> 
                </Styles.GroupRegister>
              </Styles.Wrapper>
            </KeyboardAvoidingView>
        )}
      </Formik>
    </Styles.Container>
  );
};

export default Signup;