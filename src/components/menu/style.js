import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  padding: 6px 10px;
  border-radius: 0.5rem;
  background-color: #2B2B2B;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`;

export const MenuLabelSearch = styled.label`
  margin-right: 5px;
`;

export const MenuInputSearch = styled.input`
  width: 400px;
  height: 100%;
  padding-left: 10px;
  border: 1px solid #FFF;
  border-radius: 1rem 0rem 0rem 1rem;
  background-color: #757575;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const MenuButtonSearch = styled.button`
  height: 100%;
  padding-right: 10px;
  padding-left: 5px;
  border: 1px solid #FFF;
  border-radius: 0px 1rem 1rem 0px;
  background-color: #757575;
  cursor: pointer;

  &:hover { opacity: 0.8; }
  &:active { opacity: 0.6; }
`;

export const MenuImageSearch = styled.img`
  height: 100%;
  filter: invert(1);
`;