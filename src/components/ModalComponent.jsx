import { Button, Modal, ModalHeader, ModalBody } from "flowbite-react";
import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function ModalComponent({ show, onClose, gameName, isError = false }) {
    const navigate = useNavigate();

    const handleGoToCart = () => {
        onClose(); // Close modal first
        navigate("/Cart");
    };

    return (
        <Modal show={show} size="md" onClose={onClose} popup>
            <ModalHeader />
            <ModalBody>
                <div className="text-center">
                    {isError ? (
                        <HiExclamationCircle className="mx-auto mb-4 h-14 w-14 text-amber-500 dark:text-amber-400" />
                    ) : (
                        <HiCheckCircle className="mx-auto mb-4 h-14 w-14 text-emerald-500 dark:text-emerald-400" />
                    )}
                    
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                        {isError ? "Game Already in Cart" : "Added to Cart!"}
                    </h3>
                    
                    <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                        {isError ? (
                            <>Looks like you already have <span className="font-bold text-gray-700 dark:text-gray-200">"{gameName}"</span> in your cart library.</>
                        ) : (
                            <><span className="font-bold text-gray-700 dark:text-gray-200">"{gameName}"</span> has been successfully added to your shopping cart.</>
                        )}
                    </p>
                    
                    <div className="flex justify-center gap-4">
                        <Button color="gray" onClick={onClose} className="hover:cursor-pointer">
                            Continue Shopping
                        </Button>
                        <Button color={isError ? "warning" : "info"} onClick={handleGoToCart} className="font-bold shadow-lg text-white hover:cursor-pointer">
                            Go to Cart
                        </Button>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
}