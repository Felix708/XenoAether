import { useState } from "react"
import NavbarComponent from "./components/NavbarComponent"
import BannerComponent from "./components/BannerComponent"
import CarouselComponent from "./components/CarouselComponent"
import PlatformCardComponent from "./components/PlatformCardComponent"


export default function App() {
  const [carouselImg, setCarouselImg] = useState ([
    'https://img.freepik.com/psd-gratuit/modele-banniere-web-vente-du-black-friday_120329-3848.jpg',
    'https://img.freepik.com/free-vector/gradient-gaming-setup-sale-banner_23-2149833252.jpg',
  ]);

  return (
    <div className="">
      <NavbarComponent />
      <BannerComponent />
      <CarouselComponent CarouselImages={carouselImg} />
      <PlatformCardComponent />
    </div>
  )
}

// ===================================================================================
// CurrentProgress Note:
// ended after making the card component, needs some styling, wrapping, and the a href link

// FooterNote: Things to fix
//  1. The images in Carousel wont change/slide, need fix (check app.jsx and carouselComponent.jsx)