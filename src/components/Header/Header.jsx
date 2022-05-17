import MenuIcon from "@mui/icons-material/Menu";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { Container } from "components/GlobalStyles";
import { Header, Navigation, HeaderTitle, CompanyName } from "./Header.styled";
import img from "../../images/hero/img1@2x.jpg";

export const SiteHeader = () => {
  return (
    <>
      <Header
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Navigation>
            <StarBorderRoundedIcon fontSize="large" />
            <MenuIcon fontSize="large" />
          </Navigation>
          <div>
            <HeaderTitle>A HAIR SALON FOR MEN IN KYIV</HeaderTitle>
            <CompanyName>Lend-Lease</CompanyName>
            <p>
              Мы эксперты в модных мужских <br /> стрижках. Работаем быстро,{" "}
              <br />
              осторожно и со вкусом.
            </p>
          </div>
        </Container>
      </Header>
    </>
  );
};