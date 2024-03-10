
import WhyUs from "./Dashboard/WhyUs";
import { Hero } from "./Hero";
import InfoRectangle from "./InfoRectangle";
import { InfoSection } from "./InfoSection";
import Noticias from "./Noticias";

export default function MainContent(){
  return (
    <>
      <Hero />
      <InfoSection />
      <WhyUs />
      <Noticias />
      <InfoRectangle />
    </>
  )
}

