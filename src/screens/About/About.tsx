import { useNavigate } from "react-router";
import {
  BackButton,
  CloseButton,
  Container,
  CopyButton,
  DonationButton,
  DonationContainer,
  Header,
  HeaderAppName,
  HeaderTitle,
  IntroContainer,
  MainContainer,
  ModalHeader,
  ModalTitle,
  PixCodeBox,
  PixContent,
  PixModal,
  PixOverlay,
  ProfileContainer,
  ProfileImage,
  ProfileName,
  SocialLinks,
  SocialLinkText,
} from "./About.styles";
import {
  CheckIcon,
  CoffeeIcon,
  CopyIcon,
  FlowerLotusIcon,
  XIcon,
} from "@phosphor-icons/react";
import { useState } from "react";

const About = () => {
  const [isPixModalVisible, setIsPixModalVisible] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

  const handleDonation = () => {
    setIsPixModalVisible(true);
  };

  const pixCode = "1acdf425-bc47-4246-b1a7-339bc930baed";

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopySuccess("Código copiado!");
      setTimeout(() => setCopySuccess(""), 2000);
    } catch (err) {
      setCopySuccess("Erro ao copiar");
      console.error(err);
    }
  };

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

            <HeaderTitle>Sobre o Desenvolvedor</HeaderTitle>
            <ProfileContainer>
              <ProfileImage src="/profile-pic.png" />
              <ProfileName>Victor Medrado</ProfileName>

              <SocialLinks>
                <SocialLinkText
                  href="https://www.instagram.com/escrevoemcodigos"
                  target="_blank"
                >
                  Instagram
                </SocialLinkText>

                <p>|</p>

                <SocialLinkText
                  href="https://www.linkedin.com/in/victormedrado/"
                  target="_blank"
                >
                  LinkedIn
                </SocialLinkText>
              </SocialLinks>
            </ProfileContainer>
          </Header>

          <IntroContainer>
            <p>Olá! Que bom te ver por aqui. 👋</p>

            <p>
              Sou um apaixonado por código e por encontrar o equilíbrio em cada
              linha de vida.
            </p>
            <p>
              Meu dia a dia é uma mistura de dar forma a ideias, explorar
              caminhos, e também, criar soluções que trazem um pouco de calma
              para o caos.
            </p>

            <p>
              O Breathe nasceu dessa busca por encontrar um novo ritmo, e a
              alegria de construir algo que ajude os outros a fazerem o mesmo.
            </p>

            <p>
              A minha maior paixão é aprender algo novo e, em seguida, poder
              compartilhar esse conhecimento.
            </p>

            <p>
              Se você sentiu a mesma energia no aplicativo, e quiser me apoiar,
              seu 'café' me inspira a aprender mais, a experimentar novas
              tecnologias e a continuar a jornada de compartilhar o que aprendo.
            </p>

            <p>
              Mais do que uma contribuição, é um incentivo para o próximo
              projeto, o próximo desafio, a próxima oportunidade de fazer algo
              útil para o mundo.
            </p>

            <p>
              É um voto de confiança na minha jornada como
              criador.
            </p>

            <p>E isso, para mim, vale mais que qualquer coisa.</p>
          </IntroContainer>

          <DonationContainer>
            <DonationButton onClick={handleDonation}>
              <CoffeeIcon />
              Pagar um café
            </DonationButton>

            <BackButton onClick={() => navigate("/")}>Voltar</BackButton>
          </DonationContainer>
        </Container>

        {isPixModalVisible && (
          <PixOverlay onClick={() => setIsPixModalVisible(false)}>
            <PixModal>
              <ModalHeader>
                <ModalTitle>Apoie o Projeto</ModalTitle>
                <CloseButton onClick={() => setIsPixModalVisible(false)}>
                  <XIcon size={20} />
                </CloseButton>
              </ModalHeader>
              <p>Escaneie o QR Code ou copie a chave Pix:</p>
              <PixContent>
                <img
                  src="/pix-qr-code.png"
                  alt="QR Code Pix"
                />
                <PixCodeBox>
                  <CopyButton onClick={handleCopyPix}>
                    {!copySuccess ? "Copiar código do QR Code" : copySuccess}
                    {!copySuccess ? <CopyIcon /> : <CheckIcon />}
                  </CopyButton>
                </PixCodeBox>
              </PixContent>
            </PixModal>
          </PixOverlay>
        )}
      </MainContainer>
    </main>
  );
};

export default About;
