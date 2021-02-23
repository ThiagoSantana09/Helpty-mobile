import Animated from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => `
		flex:1;
		background: ${theme.colors.white};
	`}
`;

export const ContentLogo = styled.View`
	align-items: center;
`;

export const ImgLogo = styled(Animated.Image)``;

export const Info = styled.Text`
  ${({ theme}) => `
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.primary};
		font-weight: bold;
		line-height: 43px;
		left: 48px;
  `}
`;

export const Wrapper = styled.View`
	flex:1;
	align-items: center;
`;

export const GroupInput = styled.View`
  ${({ theme }) => `
	  width: 80%;
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const ForgotPassword = styled.Text`
 ${({ theme }) => `
		color: #3A87FD;
		text-decoration: underline;
		margin-top: -${theme.spacings.small};
		margin-bottom: ${theme.spacings.medium};
	`}
`

export const TextRegister = styled.Text`
	${({ theme, strong }) => `
		font-size: ${theme.font.sizes.xlmedium};
		color: #666B6B;
		font-weight:${strong ? "bold" : "normal"};
	`}
`

export const GroupRegister = styled.View`
	flex-direction: row;
	margin-top: 40px;
`