import React, { forwardRef } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

import * as Styles from "./styles";

const Input = (
  {
    label = "",
    colorText = "#A3A3A3",
    error = false,
    touched = false,
    type = "text",
    icon,
    right = false,
    border=1,
    sizeLabel=12,
    color,
    shadow=false,
    ...rest
  },
  ref
) => {
 
  return (
    <Styles.Wrapper error={error} touched={touched}>
      <Styles.Container 
        error={error} 
        touched={touched} 
        border={border} 
        color={color}
        iconRight={right}
        style={shadow ? [
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
        ] : null}
      >
        {icon && !right ? (
          error && touched ? (
            <Icon name={icon.props.name} size={icon.props.size} color="#f1003b" />) :  icon
        ) : null}
        <Styles.Input
          {...rest}
          ref={ref}
          colorText={colorText}
          error={error}
          touched={touched}
          placeholder={label}
          placeholderTextColor={error && touched ? '#f1003b' : colorText}
          icon={icon}
          sizeLabel={sizeLabel}
          iconRight={right}
        />
        {icon && right ? (
          error && touched ? (
            <Icon name={icon.props.name} size={icon.props.size} color="#f1003b" />) :  icon
        ) : null}
      </Styles.Container>
      {error && touched ? <Styles.Error>{error}</Styles.Error> : null}
    </Styles.Wrapper>
  );
};

export default forwardRef(Input);