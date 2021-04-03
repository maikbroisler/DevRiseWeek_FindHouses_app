import React from 'react';
import {DetailText} from '../../atoms';
import {LoaderContainer, LoaderIndicator} from './styles';

export const Loader = ({text}) => (
  <LoaderContainer>
    <LoaderIndicator size="large" color="white" />
    <DetailText>{text ? text : 'Carregando...'}</DetailText>
  </LoaderContainer>
);
