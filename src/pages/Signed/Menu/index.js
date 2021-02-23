import React, { useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useAuthContext } from "../../../hooks/AuthContext";

import * as Styles from "./styles";

import iconNoPhoto from "../../../../assets/images/no_profile_image.png";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


const Menu = () => {

  const { auth, handleResetAuth } = useAuthContext();
  const memoFirstName = useMemo(() => auth.name.split(" ", 1).pop(),[auth.name]);
  
  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.GroupProfile>
          <Styles.GroupName>
            <Styles.Welcome>Olá!</Styles.Welcome>
            <Styles.Name>{memoFirstName}</Styles.Name>
            <Styles.SmallLine />
          </Styles.GroupName>
          <Styles.ImgProfile source={iconNoPhoto} />
        </Styles.GroupProfile>
        <TouchableWithoutFeedback onPress={() => handleResetAuth()}>
          <Styles.Option>
            <Icon name="logout" size={35} color="#EA7480" />
            <Styles.NameOption>Sair</Styles.NameOption>
          </Styles.Option>
          <Styles.Line />
        </TouchableWithoutFeedback>
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default Menu;