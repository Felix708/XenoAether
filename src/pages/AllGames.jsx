import ItemsGridWrapper from "../components/ItemsGridWrapper"
import { useEffect, useState } from "react";
export default function AllGames() {
    const [games, setGames] = useState([]);

    async function getDeals() {
        const url = "https://www.cheapshark.com/api/1.0/deals";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setGames(result);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getDeals();
    }, []);

    return (
        <div className="flex mx-auto my-5 p-5">
            <ItemsGridWrapper item={games}></ItemsGridWrapper>
        </div>
    )
}