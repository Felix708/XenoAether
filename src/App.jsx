import { useEffect, useState } from "react"
import BannerComponent from "./components/BannerComponent"
import CarouselComponent from "./components/CarouselComponent"
import StoreWrapperComponent from "./components/StoreWrapperComponent"
import { Spinner } from "flowbite-react";
import ReadMoreWrapperComponent from "./components/ReadMoreWrapperComponent"
import AccordionComponent from "./components/AccordionComponent"


export default function App() {
  const [carouselImg, setCarouselImg] = useState([
    'https://img.freepik.com/psd-gratuit/modele-banniere-web-vente-du-black-friday_120329-3848.jpg',
    'https://img.freepik.com/free-vector/gradient-gaming-setup-sale-banner_23-2149833252.jpg',
  ]);
  const [platformType, setPlatformType] = useState([]);
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState([
    {
      id: 1,
      title: "Can this site be trusted?",
      content: "XenoAether is 100% legit when it comes to distributing games."
    },
    {
      id: 2,
      title: "What types of payment can XenoAether use?",
      content: "Basically any type of digital payment, excluding bitcoins and or blockchains, nfts and crypto."
    },
    {
      id: 3,
      title: "How to contact the customer service?",
      content: "You can contact XenoAether's Customer Service via email XenoCS@corporate.id and we're open 24/7"
    }
  ]);

  async function getStoresData() {
    const url = "https://www.cheapshark.com/api/1.0/stores";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setPlatformType(result.slice(0, 3));
      setLoading(false);
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
      {
        loading == true ? (
          <div className="flex justify-center">
            <Spinner aria-label="center-aligned spinner example" />
            <p className="font-bold ms-2">Loading...</p>
          </div>
        ) : (
          <div className="">
            <CarouselComponent CarouselImages={carouselImg} />
            <StoreWrapperComponent type={platformType}></StoreWrapperComponent>
            <AccordionComponent question={question} />
          </div>
        )
      }
    </div>
  )
}

// ===================================================================================
// CurrentProgress Note:
// ended after making the card component, needs some styling, wrapping, and the a href link

// FooterNote: Things to fix
//  1. The images in Carousel wont change/slide, need fix (check app.jsx and carouselComponent.jsx)
//  |-> (fix) turns out the image path in the API is local stored, so need to place images icon in assets folder
// ----------------------------------------------------------------
//  2. Icon images in platform cards not showing up, need API url thing fix (check platformCardComponent.jsx, app.jsx) (if possible)
// 
// --------------------------------------------------------------------------
// 3. Change layout for all games items. Theres duplicates of games with diffetent stores, so add the store name. add search bar in all games page
// 
// --------------------------------------------------------------------------