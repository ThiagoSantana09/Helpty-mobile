import React from "react";
import Icon from 'react-native-vector-icons/AntDesign';

import * as Styles from "./styles";

const Button = ({ isHome=true }) => {
  
  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.Button onPress={() => navigation.navigate('Home')}>
          <Styles.Gradient 
            colors={['#E86576', '#F4823B']} 
            start={[0, 0]} 
            end={[1, 1]} 
            height={60} 
            width={60}
            borderRadius={40}
          >
            <Styles.ContentIcon isHome={isHome}>
              {isHome ? 
                <Icon name="shoppingcart" size={25} color="#FFF" />
                :
                <Icon name="close" size={25} color="#FFF" />
              }
            </Styles.ContentIcon>
          </Styles.Gradient>
        </Styles.Button>  
      </Styles.Wrapper>
    </Styles.Container>
    
  );
};

export default Button;