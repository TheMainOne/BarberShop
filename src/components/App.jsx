import { GlobalStyle } from "./GlobalStyles";
import { SiteHeader } from "./Header/Header";
import { AboutSection } from "./About/About";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <SiteHeader />
      <AboutSection />
    </>
  );
};
