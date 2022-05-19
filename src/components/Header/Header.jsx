import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { ModalWindow } from "components/ModalWindow/ModalWindow";
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
  HeaderText,
} from "./Header.styled";

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <StarBorderRoundedIcon
              fontSize="large"
              sx={{ color: "transparent" }}
            />
            <MenuIcon fontSize="large" onClick={handleOpen} />
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
            <CompanyName>barbershop</CompanyName>
            <HeaderText>
              Мы эксперты в модных мужских <br /> стрижках. Работаем быстро,{" "}
              <br />
              осторожно и со вкусом.
            </HeaderText>
          </NavigationTitleInformation>
          <ModalWindow
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        </Container>
      </Header>
    </>
  );
};
