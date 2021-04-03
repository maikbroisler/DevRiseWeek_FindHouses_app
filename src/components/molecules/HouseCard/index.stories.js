import styled from 'styled-components/native';
import {text, number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {HouseCard} from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundDark};
  padding: ${({theme}) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('HouseCard', module);
stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const imgSource =
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
  const title = 'Minha Casa Bonita';
  const description = text(
    'Description',
    'Av Getulio Vargas, 1000 - Belo Horizonte',
  );
  const price = number('Preço', 200);
  //const value = text('TextButton', 'Aplicar');
  return (
    <HouseCard
      imgSource={imgSource}
      title={title}
      description={description}
      price={price}
    />
  );
});
