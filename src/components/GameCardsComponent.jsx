import { Card } from "flowbite-react";

export default function GameCardsComponent({ games, stores }) {

    const savings = parseFloat(games.savings);
    const savingsPercentage = (savings / 100).toFixed(2);
    const formattedSavingsPercentage = savingsPercentage.startsWith('0.') ? savingsPercentage.substring(1) : savingsPercentage;

    return (
        <Card
            className="max-w-sm"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={games.thumb}
        >
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {games.title}
                </h5>
            </a>
            <div className="mb-5 mt-2.5 flex flex-col items-center">
                <span className="ml-3 rounded bg-emerald-700 px-2.5 py-0.5 text-xs font-semibold text-emerald-300 bg-emerald-700 dark:text-emerald-300">
                    Save: {formattedSavingsPercentage}%
                </span>
                <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                    5.0
                </span>
                <span className="text-1xl font-bold text-gray-900 dark:text-white">Deals available at: {}</span>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <span className="text-1xl font-bold text-gray-900 dark:text-white line-through">${games.normalPrice}</span>
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${games.salePrice}</span>
                </div>
                <a
                    href="#"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    Add to cart
                </a>
            </div>
        </Card>
    )
}