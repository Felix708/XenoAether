import { Card } from "flowbite-react";

export default function PlatformCardComponent({ type }) {
    return (
        <Card className="max-w-sm flex">
            <img src={type.images.logo} alt={type.storeName} />
            <div>   
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {type.storeName}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Official store platform
            </p>
            </div>
        </Card>
    )
}
