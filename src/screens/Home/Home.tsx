import { useNavigate } from "react-router";
import { Card } from "../../components";
import {
  Container,
  FooterContainer,
  Grid,
  Header,
  HeaderAppName,
  HeaderTitle,
  MainContainer,
} from "./Home.styles";
import { breathingTechniques } from "../../data/techniques";
import { FlowerLotusIcon } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { setTechnique } from "../../store/breathingSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    const selectedTechnique = breathingTechniques.find(
      (tech) => tech.id === id
    );

    if (selectedTechnique) {
      dispatch(setTechnique(selectedTechnique));
      navigate(`/breathing/${id}`);
    }
  };

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
                onClick={() => handleClick(technique.id)}
              />
            ))}
          </Grid>
          <FooterContainer>
            <p>Feito com atenção plena por</p>

            <a onClick={() => navigate("/about")}>Victor Medrado</a>
          </FooterContainer>
        </Container>
      </MainContainer>
    </main>
  );
};

export default Home;
