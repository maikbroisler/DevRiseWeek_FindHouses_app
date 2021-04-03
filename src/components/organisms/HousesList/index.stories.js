import styled from 'styled-components/native';
import {array} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {HousesList} from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundDark};
  padding: ${({theme}) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('HouseList', module);
stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const mockArray = array('Lista de Imóveis', [
    {
      property_id: '123454',
      address: {
        line: 'Minha Casa Bonita',
        neighborhood_name: 'Savassi',
        state: 'SP',
      },
      photos: [
        {
          href:
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        },
      ],
      community: {
        price_max: 500,
      },
    },
  ]);

  return <HousesList data={mockArray} />;
});
