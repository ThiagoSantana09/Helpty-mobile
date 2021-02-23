
import styled from "styled-components/native";

export const Wrapper = styled.View`
	flex:1;
	position: relative;
	background: rgba(0, 0, 0, 0.4);
`;

export const Background = styled.ImageBackground`
  flex: 1;
`;
export const ImgLogo = styled.Image`
  position: absolute;
  left: 25px;
  top: 49px;
`;
export const Info = styled.Text`
  ${({ theme, color}) => `
    font-size: ${theme.font.sizes.xxlarge};
    width: 260px;
    left: 23px;
    color: ${color ? color : theme.colors.white};
  `}
`;


export const Label = styled.Text`
	${({ theme}) => `
		font-size: ${theme.font.sizes.xlmedium};
		color: ${theme.colors.white};
	`}
`

export const TextRegister = styled.Text`
	${({ theme, underline, strong }) => `
		font-size: ${theme.font.sizes.medium};
		color: ${theme.colors.white};
		text-decoration: ${underline ? 'underline' : ''};
		font-weight:${strong ? "bold" : "normal"};
	`}
`

export const Content = styled.View`
	flex:1;
	justify-content: flex-end;
	margin-bottom: 100px;
`

export const ContentButton = styled.View`
	align-items: flex-end;
	margin-right: 23px;
	margin-top: 57px;
	margin-bottom: 48px;
`
export const GroupRegister = styled.View`
	flex-direction: row;
	justify-content: center;
`
