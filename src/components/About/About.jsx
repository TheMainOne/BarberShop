import { Container } from "components/GlobalStyles";
import { AboutSectionStyled, AboutSectionTitle } from "./About.styled";

export const AboutSection = () => {
  return (
    <AboutSectionStyled>
      <Container>
        <AboutSectionTitle>О нас</AboutSectionTitle>
      </Container>
    </AboutSectionStyled>
  );
};
