import styled from "styled-components/native";

export const Wrapper = styled.View`
 ${({ theme, error, touched }) => `
    flex-direction: column;
    margin-bottom:${error && touched ? 0 : theme.spacings.large};
  `}
`;

export const Container = styled.View`
  ${({ theme, error, touched, border, color, iconRight }) => `
    borderColor: ${error && touched ? theme.colors.danger : theme.colors.lightGray}
    borderWidth: ${border ? border : 0}px;
    borderRadius: 28px;
    background: ${color ? color : 'rgba(204, 204, 204, 0.1)'};
    flex-direction: row;
    padding: ${iconRight ? 0 : theme.spacings.small} ${theme.spacings.small};
    align-items: center;
  `}
`;

export const Input = styled.TextInput`
  ${({ theme, colorText, error, touched, icon, sizeLabel, iconRight }) => `
    width: ${iconRight ? '85%' : '100%'};
    color:${ error && touched ? theme.colors.danger : colorText};
    fontSize: ${sizeLabel}px;
    margin-left: ${icon ? theme.spacings.medium : 0}}
  `}
`;

export const Error = styled.Text`
  ${({ theme}) => `
    flex-direction: column;
    margin-bottom:${theme.spacings.small};
    font-size: ${theme.font.sizes.small}
    margin-left: 15px;
    color: ${theme.colors.danger}
  `}
`;

