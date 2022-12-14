import styled from "styled-components";

export const ProjectConteiner = styled.div`
  max-width: 400px;
  min-width: 200px;
  margin: 2px;
  padding: 10px;
  border-radius: 2rem;
  border: 1px solid #424242;
  background-color: #2B2B2B;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;

  h1 { font-size: 20px; }
  span { font-size: 16px; }
`;

export const ProjectColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
`;

export const ProjectRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
`;

export const ProjectImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 2rem;
`;