import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(TouchableOpacity)`
`;

export const Gradient = styled(LinearGradient)`
	${({ theme, height, width, borderRadius }) => `
		position: relative;
		width: ${width}px;
		height: ${height}px;
		border-radius: ${borderRadius}px; 
		align-items: center;
		justify-content: center;
		flex-direction: row;
	`}
`

export const Label = styled.Text`
	${({ theme, size }) => `
		font-size: ${size}px;
		color: ${theme.colors.white};
	`}
`;

export const Img = styled.Image`
	${({ polygon }) => `
			margin-right: ${polygon ? '-9px' : 0}
			height: ${polygon ? '15px' : '34px'}
	`}
`;

export const GroupIcons = styled.View`
	position: absolute;
	flex-direction: row;
	align-items: center;
	right: 5px;
`;
