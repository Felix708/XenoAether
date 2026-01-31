import { useEffect, useState } from "react"
import BannerComponent from "./components/BannerComponent"
import CarouselComponent from "./components/CarouselComponent"
import CardWrapperComponent from "./components/CardWrapperComponent"


export default function App() {
  const [carouselImg, setCarouselImg] = useState([
    'https://img.freepik.com/psd-gratuit/modele-banniere-web-vente-du-black-friday_120329-3848.jpg',
    'https://img.freepik.com/free-vector/gradient-gaming-setup-sale-banner_23-2149833252.jpg',
  ]);
  const [platformType, setPlatformType] = useState([]);

  async function getStoresData() {
    const url = "https://www.cheapshark.com/api/1.0/stores";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setPlatformType(result.slice(0, 3));
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getStoresData();
  }, []);

  return (
    <div className="">
      <BannerComponent />
      <CarouselComponent CarouselImages={carouselImg} />
      <CardWrapperComponent type={platformType}></CardWrapperComponent>
    </div>
  )
}

// ===================================================================================
// CurrentProgress Note:
// ended after making the card component, needs some styling, wrapping, and the a href link

// FooterNote: Things to fix
//  1. The images in Carousel wont change/slide, need fix (check app.jsx and carouselComponent.jsx)
//  2. Icon images in platform cards not showing up, need API url thing fix (check platformCardComponent.jsx, app.jsx)