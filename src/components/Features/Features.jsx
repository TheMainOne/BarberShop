import { Container } from "components/GlobalStyles";
import {
  FeaturesSection,
  FeaturesText,
  FeaturesTitle,
  FeaturesSecondText,
  FeaturesList,
  FeaturesListItem,
  FeaturesListItemWrapper,
} from "./Features.styled";

export const Features = () => {
  return (
    <FeaturesSection>
      <Container>
        <FeaturesText>старая традиционная школа</FeaturesText>
        <FeaturesTitle>Почему приходят именно к нам?</FeaturesTitle>
        <FeaturesSecondText>
          О нас говорят только хорошее. <br />
          Но лучше 1 раз увидеть и прочувствовать, чем 10 раз прочитать.
        </FeaturesSecondText>
        <FeaturesList>
          <FeaturesListItem>
            <FeaturesListItemWrapper>600</FeaturesListItemWrapper>
            <p>Довольных клиентов в день</p>
          </FeaturesListItem>
          <FeaturesListItem>
            <FeaturesListItemWrapper>50</FeaturesListItemWrapper>
            <p>Наград за отличный сервис</p>
          </FeaturesListItem>
          <FeaturesListItem>
            <FeaturesListItemWrapper>20</FeaturesListItemWrapper>
            <p>Лучших мастеров Киева</p>
          </FeaturesListItem>
          <FeaturesListItem>
            <FeaturesListItemWrapper>100</FeaturesListItemWrapper>
            <p>Подарков постоянным клиентам</p>
          </FeaturesListItem>
        </FeaturesList>
      </Container>
    </FeaturesSection>
  );
};
