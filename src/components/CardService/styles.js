import styled from "styled-components/native";

export const Container = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
})`
  ${({ theme }) => `
      position:relative;
      margin-bottom:${theme.spacings.medium};
      margin-left:30px;
      background:${theme.colors.white};
      border-radius:10px;
      padding: 7px ${theme.spacings.small};
      height: 75px;
    `}
`;


export const Icon = styled.View`
  ${({ color }) => `
    align-items:center;
    justify-content:center;
    position:absolute;
    left:-30px;
    top:10px;
    background: ${color};
    width:50px;
    height:50px;
    border-radius:10px;
  `}
`;


export const Text = styled.Text`
  ${({ theme, description }) => `
      padding-left:${theme.spacings.xlarge};
      padding-right: ${description ? theme.spacings.medium : theme.spacings.small};
      font-size:${description ? theme.font.sizes.small : theme.font.sizes.xlmedium};
      color:${description ? theme.colors.gray : theme.colors.black};
    `}
`;