import GameCardsComponent from "./GameCardsComponent";

export default function ItemsGridWrapper({ item, children }) {
    return (
        <div className="grid grid-cols-4 gap-4 m-2">
            {children}
            {item.map((item, index) => (
                <GameCardsComponent key={index} games={item} />
            ))}
        </div>
    )
}