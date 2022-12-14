import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const Content = styled.div`
  width: 60%;
  margin: 25px 0px;
  border-radius: 2rem;
  background-color: #757575;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
  }
`;

export const Header = styled.div`
  width: 100%;
  min-height: 40px;
  padding-top: 10px;
  border-radius: 2rem 2rem 0px 0px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
`;

export const Section = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`;

export const Footer = styled.div`
  width: 100%;
  min-height: 35px;
  padding: 5px 0px;
  border-radius: 0.5rem 0.5rem 2rem 2rem;
  background-color: #2B2B2B;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const ImageLogo = styled.img`
  height: 80px;
`;