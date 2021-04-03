import styled from 'styled-components/native';

export const SectionView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundDark};
  width: 100%;
  height: 100%;
`;

export const SectionImage = styled.Image`
  height: 150px;
  width: 150px;
`;
