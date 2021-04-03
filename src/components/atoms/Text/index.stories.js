import styled from 'styled-components/native';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {
  Title,
  CardTitle,
  CardDescription,
  CardHightLightText,
  DetailSectionTitle,
  DetailSubTitle,
  DetailText,
  DetailTitle,
  InputLabel,
} from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundDark};
`;

const stories = storiesOf('Text', module);
stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Title', () => {
  const value = text('Text', 'Exemplo de Title');
  return <Title>{value}</Title>;
});

stories.add('CardTitle', () => {
  const value = text('CardTitle', 'Exemplo de Title');
  return <CardTitle>{value}</CardTitle>;
});

stories.add('CardDescription', () => {
  const value = text('CardDescription', 'Exemplo de Description');
  return <CardDescription>{value}</CardDescription>;
});

stories.add('CardHightLightText', () => {
  const value = text('CardHightLightText', 'U$ 222.22');
  return <CardHightLightText>{value}</CardHightLightText>;
});

stories.add('DetailSectionTitle', () => {
  const value = text('DetailSectionTitle', 'DetailSectionTitle');
  return <DetailSectionTitle>{value}</DetailSectionTitle>;
});

stories.add('DetailSubTitle', () => {
  const value = text('DetailSubTitle', 'DetailSubTitle');
  return <DetailSubTitle>{value}</DetailSubTitle>;
});

stories.add('DetailText', () => {
  const value = text('DetailText', 'DetailText');
  return <DetailText>{value}</DetailText>;
});

stories.add('DetailTitle', () => {
  const value = text('DetailTitle', 'DetailTitle');
  return <DetailTitle>{value}</DetailTitle>;
});

stories.add('InputLabel', () => {
  const value = text('InputLabel', 'InputLabel');
  return <InputLabel>{value}</InputLabel>;
});
