import React from "react";
import iconEllipse from "../../../assets/images/icon_ellipse.png";
import iconPolygon from "../../../assets/images/icon_polygon.png";

import * as Styles from "./styles";

const Button = ({
  label,
  icon,
  height=41,
  width=163,
  sizeLabel=17,
  borderRadius=21,
  ...rest
}) => {
  return (
    <Styles.Container
      {...rest}
    >
      <Styles.Gradient 
        colors={['#E86576', '#F4823B']} 
        start={[0, 0]} 
        end={[1, 1]} 
        height={height} 
        width={width}
        borderRadius={borderRadius}
      >
        <Styles.Label size={sizeLabel}>
          {label}
        </Styles.Label>
        {icon && (
          <Styles.GroupIcons>
            <Styles.Img source={iconPolygon} polygon/>
            <Styles.Img source={iconEllipse}/>
          </Styles.GroupIcons>  
        )}
      </Styles.Gradient>
    </Styles.Container>
  );
};

export default Button;