import { GlobalStyle } from "./GlobalStyles";
import { SiteHeader } from "./Header/Header";
import { AboutSection } from "./About/About";
import { PriceList } from "./PriceList/PriceList";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <SiteHeader />
      <AboutSection />
      <PriceList />
    </>
  );
};
