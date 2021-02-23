import styled from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => `
    flex:1
		background: ${theme.colors.white};
	`}
`;

export const Header = styled.View`
  ${({ theme }) => `
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 ${theme.spacings.xxlarge};
    margin-top: 34px;
  `}
`;

export const ImgHeader = styled.Image``;

export const ImgLogo = styled.Image`
  height: 37.18px;
  width: 52px;
`;

export const ImgProfile = styled.Image`
  border-radius: 35px;
  height: 71px;
  width: 71px;
  margin-right: 23px;
`;

export const GroupProfile = styled.View`
  ${({ theme }) => `
    flex-direction: row;
    margin: 23px ${theme.spacings.xlarge};
    align-items: center;
    justify-content: space-between;
  `} 
`;

export const GroupName = styled.View`
  flex-direction: column;
`;

export const Welcome = styled.Text`
  ${({ theme }) => `
		fontSize: ${theme.font.sizes.medium};
    color: ${theme.colors.lightPrimary};
	`}
`;

export const Name = styled.Text`
  ${({ theme }) => `
		fontSize: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.gray};
    margin-top: -5px;
	`}
`;

export const Line = styled.Text`
 ${({ theme }) => `
    width: 35px;
    background-color: ${theme.colors.xLightPrimary};
    border-radius: 6px;
    margin-top: 10px;
    height: 6px;
  `}
`;

export const GroupCard = styled.View`
  flex-direction: row;
  margin-left: 13px;
  margin-right: 23px;
  margin-bottom: 25px;
`;

export const Content = styled.View`
  height: 75px;
  background: #FFF;
  border-radius: 8px;
  margin-bottom: 30px;
`;

export const Wrapper = styled.View``;

export const LittleCard = styled.View`
  width: 302px;
  height: 75px;
  background-color: #FFF;
`;

export const Title = styled.Text`
  ${({ theme }) => `
		font-size: ${theme.font.sizes.xlmedium};
    color: ${theme.colors.gray};
    margin: 7px 14px;
    font-weight: bold;
	`}
`;

export const Description = styled.Text`
  ${({ theme }) => `
		font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin: 7px 14px;
	`}
`;

