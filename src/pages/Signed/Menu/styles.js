import styled from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => `
		flex:1;
		background: ${theme.colors.white};
	`}
`;

export const Wrapper = styled.View`
  margin-top: 71.5px;
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

export const SmallLine = styled.Text`
 ${({ theme }) => `
    width: 35px;
    background-color: ${theme.colors.xLightPrimary};
    border-radius: 6px;
    margin-top: 10px;
    height: 5.5px;
  `};
`;

export const Line = styled.View`
  ${({ theme }) => `
    background-color: ${theme.colors.gray};
    height: 1px;
    margin: 15px 22px;
  `}
`;

export const Option = styled.View`
  ${({ theme }) => `
    margin: 0 ${theme.spacings.large};
    flex-direction: row;
    align-items: center;
  `}
`;

export const NameOption = styled.Text`
  ${({ theme }) => `
    font-size: ${theme.font.sizes.large};
    margin-left: 6px;
    color: ${theme.colors.gray};
  `}
`;



