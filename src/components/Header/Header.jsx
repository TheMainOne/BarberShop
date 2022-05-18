import MenuIcon from "@mui/icons-material/Menu";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { Container } from "components/GlobalStyles";
import {
  Header,
  Navigation,
  HeaderTitle,
  CompanyName,
  NavigationWrapper,
  NavigationLargeList,
  NavigationLargeListItem,
  NavigationLargeListItemLink,
  NavigationContactsWrapper,
  NavigationContactsButton,
  NavigationContactsLink,
  NavigationTitleInformation,
} from "./Header.styled";

export const SiteHeader = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <StarBorderRoundedIcon
              fontSize="large"
              sx={{ color: "transparent" }}
            />
            <MenuIcon fontSize="large" />
          </Navigation>
          <NavigationWrapper>
            <nav>
              <NavigationLargeList>
                <NavigationLargeListItem>
                  <NavigationLargeListItemLink href="#">
                    О нас
                  </NavigationLargeListItemLink>
                </NavigationLargeListItem>
                <NavigationLargeListItem>
                  <NavigationLargeListItemLink href="#">
                    Товары
                  </NavigationLargeListItemLink>
                </NavigationLargeListItem>
                <NavigationLargeListItem>
                  <NavigationLargeListItemLink href="#">
                    Контакты
                  </NavigationLargeListItemLink>
                </NavigationLargeListItem>
              </NavigationLargeList>
            </nav>
            <NavigationContactsWrapper>
              <NavigationContactsButton>
                Связаться с нами
              </NavigationContactsButton>
              <NavigationContactsLink href="tel:+380441111111">
                +38 044 111 11 11
              </NavigationContactsLink>
            </NavigationContactsWrapper>
          </NavigationWrapper>
          <NavigationTitleInformation>
            <HeaderTitle>A HAIR SALON FOR MEN IN KYIV</HeaderTitle>
            <CompanyName>Lend-Lease</CompanyName>
            <p>
              Мы эксперты в модных мужских <br /> стрижках. Работаем быстро,{" "}
              <br />
              осторожно и со вкусом.
            </p>
          </NavigationTitleInformation>
        </Container>
      </Header>
    </>
  );
};
