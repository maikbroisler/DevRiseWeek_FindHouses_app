import React from 'react';
import {InputLabel} from '../../atoms';
import {InputContainer, InputText} from './styles';

export const Input = props => {
  const {label, placeholder} = props;
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputText
        {...props}
        placeholder={placeholder}
        placeholderTextColor="white"
      />
    </InputContainer>
  );
};
