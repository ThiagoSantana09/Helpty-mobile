import React, { useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback, ScrollView, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionics from 'react-native-vector-icons/Ionicons';


import { useAuthContext } from "../../../hooks/AuthContext";
import Input from "../../../components/Input";
import Card from "../../../components/Card";
import CardService from '../../../components/CardService';

import * as Styles from "./styles";

import logo from "../../../../assets/images/logo_pink.png";
import iconMenu from "../../../../assets/images/icon_menu.png";
import iconCart from "../../../../assets/images/icon_cart.png";
import iconNoPhoto from "../../../../assets/images/no_profile_image.png";
import iconClean from "../../../../assets/images/limpeza_residencial.png";
import iconCleanTwo from "../../../../assets/images/limpeza_comercial.png";

const Home = () => {
  const navigation = useNavigation();

  const { auth } = useAuthContext();
  const memoFirstName = useMemo(() => auth.name.split(" ", 1).pop(),[auth.name]);
  
  return (
    <Styles.Container>
      <Styles.Wrapper>
      <Styles.Header>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Menu')}>
          <Styles.ImgHeader source={iconMenu}/>
        </TouchableWithoutFeedback>
        <Styles.ImgLogo source={logo} />
        <TouchableWithoutFeedback>
          <Styles.ImgHeader source={iconCart}/>
        </TouchableWithoutFeedback>
      </Styles.Header>
      <Styles.GroupProfile>
        <Styles.GroupName>
          <Styles.Welcome>Bem vindo</Styles.Welcome>
          <Styles.Name>{memoFirstName}</Styles.Name>
          <Styles.Line />
        </Styles.GroupName>
        <Styles.ImgProfile source={iconNoPhoto} />
      </Styles.GroupProfile>
      <ScrollView
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={{paddingHorizontal: 15, paddingBottom: 5}}
      >
        <Styles.GroupCard>
          <Card 
            icon={iconClean}
            title="Limpeza Residencial"
            description="Uma limpeza padrão. Para te ajudar nos dias que você irá receber visitas, ou está corrido no trabalho."
          />
          <Card 
            icon={iconCleanTwo}
            title="Limpeza Comercial"
            description="Uma limpeza padrão. Para te ajudar nos dias que você irá receber visitas, ou está corrido no trabalho."
          />
        </Styles.GroupCard>
      </ScrollView>
      <View style={{marginHorizontal: 22}}>
        <Input 
          label="Pesquisar" 
          sizeLabel={16} 
          color="#FFF" 
          border={0} 
          shadow
          icon={<Ionics name="search-circle" size={40} color="#EE8A90" />}
          right
        />
      </View>
      </Styles.Wrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingBottom: 10, marginHorizontal: 22}}
      >
        <CardService 
          title="Selo verde" 
          description="Não tinha medo o tal João de Santo Cristo Era o que todos diziam quando ele..."
          icon={<MaterialCommunityIcons name="sprout" size={28} color="#FFF" />}
          color="#A0CF0B"
        />
        <CardService 
          title="10 maneiras de descarte correto..."
          description="Deixou para traz todo marasmo da fazenda
          só pra sentir no seu sangue o..."
          icon={<MaterialCommunityIcons name="trash-can-outline" size={28} color="#FFF" />}
          color="#222863"
        />
      </ScrollView>
    </Styles.Container>
  );
};

export default Home;