import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { IoGameControllerOutline } from "react-icons/io5";

export default function Cart() {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <section className="bg-gray-50 dark:bg-gray-950 min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Shopping Cart</h1>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Your cart is empty</h2>
                            <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg max-w-sm text-center">
                                Looks like you haven't added any games to your cart library yet.
                            </p>
                            <Button size="xl" onClick={() => navigate("/AllGames")} className="shadow-lg">
                                Explore Game Deals
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {cart.map((game, index) => (
                                <div key={game.id || index}>
                                    <div className="flex flex-col sm:flex-row items-center gap-8 py-4">
                                        <div className="w-40 h-24 shrink-0 bg-gray-900 rounded-xl overflow-hidden shadow-md">
                                            <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 text-center sm:text-left">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{game.title}</h3>
                                            <div className="flex items-center justify-center sm:justify-start gap-2">
                                                <span className="px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">Steam Key</span>
                                                <span className="text-sm text-gray-400 dark:text-gray-500">Fixed Qty: 1</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center sm:items-end bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl min-w-[120px]">
                                            {game.normalPrice && (
                                                <span className="text-sm text-gray-400 dark:text-gray-500 line-through mb-1">${game.normalPrice}</span>
                                            )}
                                            <span className="text-2xl font-black text-emerald-500 dark:text-emerald-400">${game.price}</span>
                                        </div>
                                    </div>
                                    {index < cart.length - 1 && <hr className="mt-8 border-gray-100 dark:border-gray-800" />}
                                </div>
                            ))}
                            
                            <div className="mt-12 pt-8 border-t-2 border-dashed border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-8 bg-gray-50/50 dark:bg-gray-900/20 p-8 rounded-2xl">
                                <div className="text-gray-900 dark:text-white text-center sm:text-left">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 uppercase font-bold tracking-widest mb-1">Total Price</p>
                                    <span className="text-4xl font-black text-cyan-600 dark:text-cyan-400">
                                        ${cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                    <Button size="lg" outline color="gray" className="flex-1 sm:flex-none font-bold" onClick={() => navigate("/AllGames")}>
                                        Continue Shopping
                                    </Button>
                                    <Button size="lg" gradientDuoTone="cyanToBlue" className="flex-1 sm:flex-none font-bold shadow-lg" onClick={() => navigate("/CartChekout")}>
                                        Proceed to Checkout
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
