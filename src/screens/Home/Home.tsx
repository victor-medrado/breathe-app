import { useNavigate } from "react-router";
import { Card } from "../../components";
import {
  Container,
  Grid,
  Header,
  HeaderAppName,
  HeaderTitle,
  MainContainer,
} from "./Home.styles";
import { breathingTechniques } from "../../data/techniques";
import { FlowerLotusIcon } from "@phosphor-icons/react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main style={{ position: "relative" }}>
      <MainContainer>
        <Container>
          <Header>
            <HeaderAppName>
              <FlowerLotusIcon size={24} />
              <span>Breathe</span>
            </HeaderAppName>

            <HeaderTitle>Respiração Guiada</HeaderTitle>
            <p>Técnicas de respiração para relaxamento, foco e bem-estar</p>
          </Header>
          <Grid>
            {breathingTechniques.map((technique) => (
              <Card
                key={technique.id}
                title={technique.title}
                description={technique.description}
                icon={technique.icon}
                tags={technique.tags}
                onClick={() => navigate(`/breathing/${technique.id}`)}
              />
            ))}
          </Grid>
        </Container>
      </MainContainer>
    </main>
  );
};

export default Home;
