import { Container } from "components/GlobalStyles";
import {
  FooterSection,
  FooterTitle,
  FooterContactsList,
  FooterContactsListItem,
  FooterContactsListLink,
  FooterContactsListText,
  FooterSecondTitle,
  FooterSecondText,
} from "./Footer.styled";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterTitle>Контакты</FooterTitle>
        <adress>
          <FooterContactsList>
            <FooterContactsListItem>
              <FooterContactsListLink>
                <LocationOnOutlinedIcon />
                <FooterContactsListText>
                  ул. Васильковая, 7А Киев, 08132
                </FooterContactsListText>
              </FooterContactsListLink>
            </FooterContactsListItem>
            <FooterContactsListItem>
              <FooterContactsListLink>
                <LocalPhoneSharpIcon />
                <FooterContactsListText>
                  +38 044 111 11 11
                </FooterContactsListText>
              </FooterContactsListLink>
            </FooterContactsListItem>
            <FooterContactsListItem>
              <FooterContactsListLink>
                <EmailOutlinedIcon />
                <FooterContactsListText>
                  barbershop@email.com
                </FooterContactsListText>
              </FooterContactsListLink>
            </FooterContactsListItem>
          </FooterContactsList>
        </adress>
        <FooterSecondTitle>Время работы</FooterSecondTitle>
        <FooterSecondText>Ежедневно с 9:00 до 22:00</FooterSecondText>
      </Container>
    </FooterSection>
  );
};
