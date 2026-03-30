import { Spinner } from "flowbite-react";
import ItemsGridWrapper from "../components/ItemsGridWrapper";
import SearchComponent from "../components/SearchComponent";
import { useEffect, useState } from "react";

export default function AllGames() {
    const [games, setGames] = useState([]);
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    
    function processSearch(event) {
        setSearch(event.target.value);
        if (event.key === "Enter") {
            getGamesData("https://www.cheapshark.com/api/1.0/games?title=" + search);
        }
    }
    
    async function getGamesData(url) {
        setLoading(true);
        
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Response status: ${response.status}`);
            const result = await response.json();
            setGames(groupUniqueGames(result));
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    
    function groupUniqueGames(deals) {
        const uniqueGamesMap = {};
        deals.forEach(deal => {
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
        return Object.values(uniqueGamesMap);
    }

    async function getDeals() {
        const url = "https://www.cheapshark.com/api/1.0/deals";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setGames(groupUniqueGames(result));
        } catch (error) {
            console.error(error.message);
        }
    }

    async function getStoreData() {
        const url = "https://www.cheapshark.com/api/1.0/stores";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setStores(result);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        async function fetchAll() {
            setLoading(true);
            await Promise.all([getDeals(), getStoreData()]);
            setLoading(false);
        }
        fetchAll();
    }, []);

    return (
        <section className="bg-gray-50 dark:bg-gray-950 min-h-screen pt-8 pb-24">
            <div className="px-4 mx-auto max-w-7xl lg:px-6">
                <div className="mx-auto max-w-3xl text-center mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Complete Deal Library
                    </h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        The Freshest Deal from Games Across the Stores!
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8 max-w-7xl mx-auto w-full">
                    <div className="w-full sm:w-1/2">
                        <SearchComponent processSearch={processSearch} />
                    </div>
                </div>

                {loading ? (
                    <div className="flex flex-col justify-center items-center min-h-[50vh]">
                        <Spinner aria-label="Loading library..." size="xl" color="info" />
                        <p className="font-bold mt-4 text-cyan-600 dark:text-cyan-400 text-lg animate-pulse">Loading games...</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center w-full">
                        <div className="w-full">
                            <ItemsGridWrapper item={games} stores={stores}></ItemsGridWrapper>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}