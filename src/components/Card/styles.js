import styled from "styled-components/native";

export const ImgCard = styled.Image`
  height: 228px;
  width: 220px;
  border-radius: 8px;
`;

export const Container = styled.View`
  width: 220px;
  height: 332px;
  margin-right: 17px;
  position: relative;
  align-items: center;
`;

export const Content = styled.View`
  width: 220px;
  height: 130px;
  background: #FFF;
  border-radius: 8px;
  position: absolute;
  top: 212px;
`;

export const ContentButton = styled.View`
  position: absolute;
  top: 199px;
  z-index: 100;
`;

export const Title = styled.Text`
  ${({ theme }) => `
		font-size: ${theme.font.sizes.xlmedium};
    color: ${theme.colors.gray};
    font-weight: bold;
    margin-top: ${theme.spacings.xlmedium}
    margin-left: 6px;
	`}
`;

export const Description = styled.Text`
  ${({ theme }) => `
		font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin: 7px 14px;
	`}
`;