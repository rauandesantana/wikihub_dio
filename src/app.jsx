import React, { useState } from 'react'
import LogoGitHub from "./assets/images/github.png";
import Menu from "./components/menu"
import Project from './components/project';
import { GitHub } from './services/github';
import { 
  Container,
  Content,
  Footer,
  Header,
  ImageLogo,
  Section,
} from "./style/app";

const App = () => {
  const [projectGet, projectSet] = useState("");
  const [listProjectGet, listProjectSet] = useState([]);

  const searchProject = async () => {
    try {
      const {data} = await GitHub.get(`/repos/${projectGet}`);
      if (data.id) { 
        let checked = listProjectGet.find(item => item["id"] === data.id);
      
        if (!checked) {
          listProjectSet(prev => [...prev, data]);
          projectSet("");
        } else {
          alert("O Projeto já foi adicionado...");
        }
      } else {
        alert("O Projeto não foi encontrado...");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const removeProject = (id) => {
    let newList = listProjectGet.filter((item) => item["id"] !== id);
    listProjectSet(newList);
  }

  return (
    <Container>
      <Content>
        <Header>
          <ImageLogo src={LogoGitHub} alt="Logo do GitHub" />
          <Menu onClickSearch={searchProject} valueSearch={projectGet} onChangeSearch={
            (event) => projectSet(event.target.value)
          } />
        </Header>
        <Section>
          {
            listProjectGet.map((p) => <Project key={p["id"]} project={p} onClick={
              () => removeProject(p["id"])
            }/>)
          }
        </Section>
        <Footer>
          <span>WikiHub</span>
        </Footer>
      </Content>
    </Container>
  );
}

export default App;
