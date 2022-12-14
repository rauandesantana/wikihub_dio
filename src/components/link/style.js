import styled, {css} from "styled-components";

export const LinkObject = styled.a`
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 2px 8px;
  font-size: 16px;
  border: none;
  border-radius: 1rem;
  background-color: #757575;
  text-decoration: none;
  cursor: pointer;

  &:hover { opacity: 0.8; }
  &:active { opacity: 0.6; }

  ${({bgColor}) => (bgColor !== "") && css`
    background-color: ${bgColor};
  `}
`;