import { GlobalStyle } from "./GlobalStyles";
import { SiteHeader } from "./Header/Header";
import { AboutSection } from "./About/About";
import { PriceList } from "./PriceList/PriceList";
import { Features } from "./Features/Features";
import { GoodsSection } from "./Goods/Goods";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <SiteHeader />
      <AboutSection />
      <PriceList />
      <Features />
      <GoodsSection />
    </>
  );
};
