import { useEffect, useState } from "react"
import BannerComponent from "./components/BannerComponent"
import CarouselComponent from "./components/CarouselComponent"
import ItemsGridWrapper from "./components/ItemsGridWrapper"
import { Spinner, Button } from "flowbite-react";
import AccordionComponent from "./components/AccordionComponent"
import { Link } from "react-router-dom";


export default function App() {
  const [carouselImg, setCarouselImg] = useState([
    'https://img.freepik.com/psd-gratuit/modele-banniere-web-vente-du-black-friday_120329-3848.jpg',
    'https://img.freepik.com/free-vector/gradient-gaming-setup-sale-banner_23-2149833252.jpg',
  ]);
  const [topDeals, setTopDeals] = useState([]);
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState([
    {
      id: 1,
      title: "Can this site be trusted?",
      content: "XenoAether is 100% legit when it comes to finding best deals for all games."
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

  async function getTopDeals() {
    setLoading(true);
    try {
      const storeRes = await fetch("https://www.cheapshark.com/api/1.0/stores");
      if (!storeRes.ok) throw new Error("Store network response failed");
      const storeData = await storeRes.json();
      setStores(storeData);

      const dealsRes = await fetch("https://www.cheapshark.com/api/1.0/deals");
      if (!dealsRes.ok) throw new Error("Deals network response failed");
      const dealsData = await dealsRes.json();

      const uniqueGamesMap = {};
      dealsData.forEach(deal => {
        if (!uniqueGamesMap[deal.gameID]) {
          uniqueGamesMap[deal.gameID] = {
            ...deal,
            storeIDs: [deal.storeID]
          };
        } else {
          if (!uniqueGamesMap[deal.gameID].storeIDs.includes(deal.storeID)) {
            uniqueGamesMap[deal.gameID].storeIDs.push(deal.storeID);
          }
        }
      });

      const uniqueGamesArray = Object.values(uniqueGamesMap).slice(0, 4);
      setTopDeals(uniqueGamesArray);

    } catch (err) {
      console.error("Error fetching homepage deals:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTopDeals();
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
      <BannerComponent />
      {
        loading ? (
          <div className="flex flex-col justify-center items-center min-h-[50vh]">
            <Spinner aria-label="Loading..." size="xl" color="info" />
            <p className="font-bold mt-4 text-cyan-600 dark:text-cyan-400 text-lg animate-pulse">Gathering Deals...</p>
          </div>
        ) : (
          <div className="pb-16">

            {/* Hero Section */}
            <header className="px-4 py-8 mx-auto max-w-7xl text-center lg:py-16">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Find the Best Gaming Deals ASAP!
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                #1 Place to find the best deals on all games
              </p>

              {/* Fixed Custom Carousel wrapper */}
              <div className="flex justify-center w-full px-2">
                <CarouselComponent CarouselImages={carouselImg} />
              </div>
            </header>

            {/* Featured Section */}
            <section className="px-4 py-8 mx-auto max-w-7xl bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-800 my-8">
              <div className="flex flex-col items-center">
                <div className="w-full flex justify-between items-end mb-8 px-4 py-4">
                  <div>
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Top Game Deals Right Now!</h2>
                  </div>
                  <Link to="/AllGames" className="hidden sm:inline-flex">
                    <Button outline gradientDuoTone="cyanToBlue" className="hover:-translate-y-1 transition-transform">
                      See All Deals
                      <svg className="w-4 h-4 ml-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </Button>
                  </Link>
                </div>

                {/* Store Grid Wrapper Component */}
                <div className="w-full text-left px-4">
                  <ItemsGridWrapper item={topDeals} stores={stores}></ItemsGridWrapper>
                </div>

                <Link to="/AllGames" className="sm:hidden mt-8 w-full px-4">
                  <Button gradientDuoTone="cyanToBlue" size="lg" className="w-full">
                    See All Deals
                  </Button>
                </Link>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="px-4 py-8 mx-auto max-w-3xl my-12">
              <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
              <div  >
                <AccordionComponent question={question} />
              </div>
            </section>

          </div>
        )
      }
    </div>
  )
}

// ===================================================================================
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
// 4. make it so the games has the "Deals available at: {storename}" working..
// --------------------------------------------------------------------------