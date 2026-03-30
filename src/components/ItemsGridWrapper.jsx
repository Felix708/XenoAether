import GameCardsComponent from "./GameCardsComponent";

export default function ItemsGridWrapper({ item, stores, isDetailView = false, children }) {
    return (
        <div className="grid grid-cols-4 gap-4 m-2">
            {children}
            {item.map((item, index) => (
                <GameCardsComponent key={index} games={item} stores={stores} isDetailView={isDetailView} />
            ))}
        </div>
    )
}