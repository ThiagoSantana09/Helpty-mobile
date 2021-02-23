import React from "react";
import { Pressable } from "react-native";
import * as Styles from './styles';

const CardService = ({
  title,
  description,
  icon,
  color
}) => {
  return (
    <Pressable>
      <Styles.Container>
        <Styles.Icon color={color}>
          {icon}
        </Styles.Icon>
        <Styles.Text>{title}</Styles.Text>
        <Styles.Text description numberOfLines={2}>{description}</Styles.Text>
      </Styles.Container>
    </Pressable>
  )
}

export default CardService