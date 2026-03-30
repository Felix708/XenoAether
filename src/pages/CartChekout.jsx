import CardCartComponent from "../components/CardCartComponent";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { useState } from "react";

export default function CartChekout() {
    const [isPaid, setIsPaid] = useState(false);

    const handlePayment = () => {
        // Dummy payment logic
        setIsPaid(true);
        setTimeout(() => {
            alert("Payment successful! Thank you for your purchase.");
            window.location.href = "/";
        }, 1500);
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-950 min-h-screen py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">Finalize Purchase</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">Secure your digital keys and jump into the game!</p>
                </div>

                {isPaid && (
                    <Alert color="success" icon={HiInformationCircle} className="mb-8">
                        <span className="font-medium">Payment processing!</span> Your transaction is being verified by the storefront.
                    </Alert>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                    <div className="w-full">
                        <CardCartComponent 
                            type="checkout" 
                            paymentConfirmation={handlePayment} 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
