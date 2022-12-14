import React from 'react'
import { LinkObject } from './style';

const Link = ({title, bgColor, link}) => {
  return (
    <LinkObject href={link} bgColor={bgColor} target="_blank">{title}</LinkObject>
  );
}

export default Link;