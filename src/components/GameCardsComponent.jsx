import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function GameCardsComponent({ games, stores = [], isDetailView = false }) {
    const { addtoCart } = useContext(CartContext);

    const savings = parseFloat(games.savings);
    const savingsPercentage = (savings / 100).toFixed(2);
    const formattedSavingsPercentage = savingsPercentage.startsWith('0.') ? savingsPercentage.substring(1) : savingsPercentage;

    let storeName = "Unknown Store";
    if (games.storeIDs && Array.isArray(games.storeIDs)) {
        storeName = games.storeIDs.map(id => {
            const store = stores.find(s => s.storeID === id);
            return store ? store.storeName : null;
        }).filter(Boolean).join(", ");
    } else {
        const store = stores.find(s => s.storeID === games.storeID);
        storeName = store ? store.storeName : "Unknown Store";
    }

    return (
        <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow border border-gray-200 dark:border-gray-700 dark:bg-gray-800 h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="sm:w-2/5 shrink-0 bg-gray-900 flex items-center justify-center">
                <img className="w-full h-full object-cover" src={games.thumb} alt={games.title} />
            </div>

            <div className="flex flex-col justify-between p-4 w-full">
                <div>
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {games.title}
                    </h5>
                    <div className="mb-3 flex flex-wrap gap-2 items-center">
                        <span className="rounded bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
                            Save: {formattedSavingsPercentage}%
                        </span>
                        <span className="rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300">
                            5.0
                        </span>
                    </div>
                    {isDetailView && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">Deals at: </span> {storeName}
                        </p>
                    )}
                </div>

                <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
                    {isDetailView && (
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">${games.normalPrice}</span>
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">${games.salePrice}</span>
                        </div>
                    )}

                    {!isDetailView ? (
                        <Link to={`/AllGameDeals?id=${games.gameID}`} className="ml-auto">
                            <div className="rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                                See All Deals
                            </div>
                        </Link>
                    ) : (
                        <button 
                            className="rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 ml-auto cursor-pointer"
                            onClick={() => addtoCart(games)}
                        >
                            Add to cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}