import { Carousel } from "flowbite-react";

export default function CarouselComponent({ CarouselImages }) {
    return (
        <div className="h-64 sm:h-80 xl:h-96 2xl:h-120 w-full max-w-7xl mx-auto relative rounded-2xl overflow-hidden shadow-xl mb-12 border border-gray-200 dark:border-gray-800">
            <Carousel slideInterval={5000}>
                {CarouselImages.map((item, index) => (
                    <div key={index} className="flex h-full w-full items-center justify-center bg-gray-900">
                        <img
                            src={item}
                            alt={`Slide ${index + 1}`}
                            className="block w-full h-full object-cover"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
