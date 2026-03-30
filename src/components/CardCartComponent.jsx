import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { Card, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function CardCartComponent({ type, paymentConfirmation }) {
    const { cart, deleteAll } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <Card className="block mx-auto w-4xl mt-20">
            <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Your Cart</h5>
                <div className="text-sm font-medium text-red-600 hover:underline cursor-pointer dark:text-red-500" onClick={deleteAll}>
                    Clear all games
                </div>
            </div>
            <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {
                        cart.map((item, index) => (
                            <li key={item.id || index} className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Game thumbnail"
                                            height="50"
                                            src={item.image}
                                            width="50"
                                            className="rounded"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1 text-left">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                                        <p className="truncate text-xs text-gray-500 dark:text-gray-400">Quantity: 1</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${item.price}</div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {
                cart.length > 0 && type == "cart" ? (
                    <div className="flex items-center justify-end mt-4">
                        <Button className="bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-lime-200 dark:focus:ring-teal-700" onClick={() => navigate("/CartChekout")}>Checkout Now</Button>
                    </div>
                ) : (
                    cart.length > 0 && type == "checkout" && (
                        <div className="">
                            <div className="flex flex-col justify-between mt-4">
                                <h1 className="text-xl font-bold dark:text-white ">Payment Details</h1>
                                <div className="flex justify-between mt-2 dark:text-white text-sm">
                                    <span className="ms-4 text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold">Games Total</span>
                                    <span className="ms-4 font-black">${cart.reduce((total, item) => total + (parseFloat(item.price) * item.qty), 0).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between mt-2 dark:text-white text-sm">
                                    <span className="ms-4 text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold">Service Fee</span>
                                    <span className="ms-4 font-black">15%</span>
                                </div>
                                <hr className="my-4 border-gray-100 dark:border-gray-700" />
                                <div className="flex justify-between mt-2 dark:text-white">
                                    <span className="ms-4 font-extrabold text-lg">Grand Total</span>
                                    <span className="ms-4 font-black text-2xl text-emerald-500 dark:text-emerald-400">${(cart.reduce((total, item) => total + (parseFloat(item.price) * item.qty), 0) * 1.15).toFixed(2)}</span>
                                </div>
                            </div>
                            <Button className="w-full mt-8 bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-lime-200 dark:focus:ring-teal-700 font-bold py-3" onClick={() => paymentConfirmation()}>Confirm Payment</Button>
                            <Button className="w-full mt-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800 font-bold" onClick={() => navigate("/cart")}>Return to Cart</Button>
                        </div>
                    )
                )
            }
        </Card>
    )
}
