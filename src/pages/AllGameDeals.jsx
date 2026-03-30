import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Spinner } from "flowbite-react";
import { IoArrowBackOutline } from "react-icons/io5";
import ItemsGridWrapper from "../components/ItemsGridWrapper";

export default function AllGameDeals() {
    const [searchParams] = useSearchParams();
    const gameID = searchParams.get("id");

    const [deals, setDeals] = useState([]);
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [gameInfo, setGameInfo] = useState({ title: "Loading...", thumb: "" });

    useEffect(() => {
        if (!gameID) {
            setLoading(false);
            return;
        }

        async function fetchGameDetails() {
            setLoading(true);
            try {
                const gameResponse = await fetch(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`);
                if (!gameResponse.ok) throw new Error("Game fetch failed");
                const gameData = await gameResponse.json();

                const storeResponse = await fetch("https://www.cheapshark.com/api/1.0/stores");
                if (!storeResponse.ok) throw new Error("Store fetch failed");
                const storeData = await storeResponse.json();

                setStores(storeData);

                if (gameData.info) {
                    setGameInfo({
                        title: gameData.info.title,
                        thumb: gameData.info.thumb
                    });

                    const mappedDeals = gameData.deals.map(deal => ({
                        gameID: gameID,
                        dealID: deal.dealID,
                        storeID: deal.storeID,
                        title: gameData.info.title,
                        thumb: gameData.info.thumb,
                        salePrice: deal.price,
                        normalPrice: deal.retailPrice,
                        savings: deal.savings,
                    }));

                    mappedDeals.sort((a, b) => parseFloat(a.salePrice) - parseFloat(b.salePrice));
                    setDeals(mappedDeals);
                }

            } catch (error) {
                console.error("Deal fetching error:", error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchGameDetails();
    }, [gameID]);

    if (!gameID) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 dark:bg-gray-950 px-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No Game Selected</h2>
                <Link to="/AllGames" className="text-cyan-600 hover:underline dark:text-cyan-400">Return to Library</Link>
            </div>
        );
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-950 min-h-screen pt-8 pb-24">
            <div className="px-4 mx-auto max-w-7xl lg:px-6">

                <div className="mb-8">
                    <Link to="/AllGames" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition duration-150">
                        <IoArrowBackOutline className="w-5 h-5 mr-2" />
                        Back to Library
                    </Link>
                </div>

                <div className="mx-auto max-w-3xl text-center mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        {gameInfo.title}
                    </h2>
                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        There's {deals.length} active deals across all available stores.
                    </p>
                </div>

                {loading ? (
                    <div className="flex flex-col justify-center items-center min-h-[50vh]">
                        <Spinner aria-label="Loading library..." size="xl" color="info" />
                        <p className="font-bold mt-4 text-cyan-600 dark:text-cyan-400 text-lg animate-pulse">Scanning storefronts...</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center w-full">
                        <div className="w-full">
                            <ItemsGridWrapper item={deals} stores={stores} isDetailView={true} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}