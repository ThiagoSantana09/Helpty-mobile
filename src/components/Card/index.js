import React from "react";
import { Platform } from "react-native"
import Button from "../Button";


import * as Styles from "./styles";

const Card = ({ icon, title, description}) => {
  return (
    <Styles.Container>
      <Styles.ImgCard source={icon} />
      <Styles.ContentButton style={{elevation: (Platform.OS === 'android') ? 10 : 0}}>
        <Button 
          label="Agendar" 
          height={25} 
          width={130} 
          sizeLabel={12} 
          borderRadius={14}
        />
      </Styles.ContentButton>
      <Styles.Content
        style={[
          {
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            elevation: 8,
          }
        ]}
      >
        <Styles.Title>{title}</Styles.Title>
        <Styles.Description>{description}</Styles.Description>
      </Styles.Content>
    </Styles.Container>
    
  );
};

export default Card;