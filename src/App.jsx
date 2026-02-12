import { useEffect, useState } from "react"
import BannerComponent from "./components/BannerComponent"
import CarouselComponent from "./components/CarouselComponent"
import CardWrapperComponent from "./components/CardWrapperComponent"
import { Spinner } from "flowbite-react";
import ReadMoreWrapperComponent from "./components/ReadMoreWrapperComponent"
import PaymentComponent from "./components/PaymentComponent"
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
      title: "What makes Epstein's Goodies better?",
      content: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more."
    },
    {
      id: 2,
      title: "Does the items in Epstein's Goodies legit?",
      content: "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file."
    },
    {
      id: 3,
      title: "How to send people 6 feet under without alerting the cops?",
      content: "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages."
    }
  ]);
  const [payment, setPayment] = useState([
    {
      id: 1,
      title: "Paypal",
      image: "https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-PNG-Free-Image.png",
    },
    {
      id: 2,
      title: "Credit Card",
      image: "https://tse4.mm.bing.net/th/id/OIP.kDaG0rL2cfRuyMlfHhLfqAHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 3,
      title: "Apple Pay",
      image: "https://tse1.mm.bing.net/th/id/OIP.tJKOUZzlAnV60dSnP7OXfgHaE8?pid=Api&P=0&h=180",
    },
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
            <CardWrapperComponent type={platformType}></CardWrapperComponent>
            <ReadMoreWrapperComponent />
            <PaymentComponent methods={payment} />
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
//  2. Icon images in platform cards not showing up, need API url thing fix (check platformCardComponent.jsx, app.jsx)
// 
// --------------------------------------------------------------------------
// 3. Fix to add the more read more card to the left side of the web (see image for reference)
// 
// --------------------------------------------------------------------------
// 4. Fix store detail page to show all platform cards (check storesDetail.jsx)
// 
// --------------------------------------------------------------------------
// 5. Probably add useContext to store API data
// 
// ------------------------------------------------------------------------