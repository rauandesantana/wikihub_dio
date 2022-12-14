import React from 'react'
import iconSearch from "../../assets/images/iconSearch.svg";
import {
  MenuButtonSearch,
  MenuContainer, MenuImageSearch, MenuInputSearch, MenuLabelSearch,
} from "./style";

const Menu = ({onClickSearch, valueSearch, onChangeSearch}) => {
  return (
    <MenuContainer>
      <MenuLabelSearch>Buscar</MenuLabelSearch>
      <MenuInputSearch type="text" value={valueSearch} onChange={onChangeSearch} />
      <MenuButtonSearch onClick={onClickSearch}>
        <MenuImageSearch src={iconSearch} alt="Icone Buscar" />
      </MenuButtonSearch>
    </MenuContainer>
  );
}

export default Menu;