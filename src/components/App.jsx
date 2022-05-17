import { GlobalStyle } from "./GlobalStyles";
import { SiteHeader } from "./Header/Header";
import { AboutSection } from "./About/About";
import { PriceList } from "./PriceList/PriceList";
import { Features } from "./Features/Features";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <SiteHeader />
      <AboutSection />
      <PriceList />
      <Features />
    </>
  );
};
