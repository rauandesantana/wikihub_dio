import React from 'react'
import { ButtonObject } from './style';

const Button = ({title, bgColor, onClick}) => {
  return (
    <ButtonObject bgColor={bgColor} onClick={onClick}>{title}</ButtonObject>
  );
}

export default Button;