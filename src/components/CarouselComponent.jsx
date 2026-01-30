
import { Carousel } from "flowbite-react";

export default function CarouselComponent({ CarouselImages }) {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full max-w-6xl mx-auto relative overflow-hidden p-4">
            <Carousel slideInterval={5000}>
                {CarouselImages.map((item, index) => (
                    <img
                        src={item}
                        key={index}
                        className="w-full h-full object-cover block"
                    />
                ))}
            </Carousel>
        </div>
    );
}
