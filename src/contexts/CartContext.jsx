import { useEffect, useState, createContext } from "react"

export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [openModalConfirmation, setOpenModalConfirmation] = useState(false);
    const [addedGameName, setAddedGameName] = useState("");

    function addtoCart(game) {
        setCart((prev) => {
            const exist = prev.find((item) => item.id === (game.gameID || game.id));
            if (exist) {
                return prev;
            }
            
            setAddedGameName(game.title);
            setOpenModalConfirmation(true);

            return [
                ...prev, {
                    id: game.gameID || game.id,
                    title: game.title,
                    price: game.salePrice || game.price,
                    normalPrice: game.normalPrice || game.normalPrice,
                    image: game.thumb || game.image,
                    qty: 1
                }
            ]
        })
    }

    useEffect(() => {
        console.log("Current Cart:", cart);
    }, [cart])

    function deleteItem(productId) {
        setCart((prev) => {
            return prev.filter((item) => item.id != productId)
        })
    }

    function deleteAll() {
        setCart([]);
    }

    return (    
        <CartContext.Provider 
            value={{ 
                cart, 
                addtoCart, 
                deleteItem, 
                deleteAll, 
                setOpenModalConfirmation, 
                openModalConfirmation,
                addedGameName
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
