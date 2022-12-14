import React from 'react'
import Button from '../button';
import Link from '../link';
import {
  ProjectColumn,
  ProjectConteiner,
  ProjectImage,
  ProjectRow,
} from './style';

const Project = ({project, onClick}) => {






  return (
    <ProjectConteiner>
      <ProjectImage src={project["owner"]["avatar_url"]} />
      <ProjectColumn>
        <h1>{project["name"]}</h1>
        <span>{project["owner"]["login"]}</span>
        <br />
        <ProjectRow>
          <Button title="Remover" bgColor="#E73D3D" onClick={onClick} />
          <Link title="Acessar" link={project["html_url"]} />
        </ProjectRow>
      </ProjectColumn>
    </ProjectConteiner>
  );
}

export default Project;