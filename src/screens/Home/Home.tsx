import { useNavigate } from "react-router";
import { Card } from "../../components";
import { Container, Grid } from "./Home.styles";
import { breathingTechniques } from "../../data/techniques";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Exercícios de Respiração</h1>
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
  );
};

export default Home;
