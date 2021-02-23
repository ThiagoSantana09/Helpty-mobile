import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  position: relative;
  align-items: center;
  margin: 0 50px; 
`;

export const Wrapper = styled.View`
  position: absolute;
  bottom: 8px;
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const ContentIcon = styled.View`
	${({ isHome }) => `
    margin-right: ${isHome ? 2.5 : 0}px;
  `}
`;
export const Button = styled(TouchableWithoutFeedback)``;

export const Gradient = styled(LinearGradient)`
	${({ height, width, borderRadius }) => `
		position: relative;
		width: ${width}px;
		height: ${height}px;
		border-radius: ${borderRadius}px; 
		align-items: center;
		justify-content: center;
		flex-direction: row;
	`}
`


