import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';  // Adjust path if needed
import { Button } from './ui/button';  // Adjust path if needed

function CategoryCarousel() {
    const category = [
        "Frontend Developer",
        "Backend Developer",
        "ReactJs Developer",
        "Graphic Designer",
        "FullStack Developer"
    ];

    return (
        <div className="w-full bg-gradient-to-r from-green-200 to-blue-300 py-10"> {/* Full-width background */}
            <div className="max-w-xl mx-auto">
                <Carousel className="relative">
                    <CarouselContent className="flex items-center gap-4">
                        {category.map((cat, index) => (
                            <CarouselItem className="flex justify-center" key={index}>
                                <Button 
                                    variant="outline" 
                                    className="rounded-full px-6 py-2 border-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out shadow-lg">
                                    {cat}
                                </Button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* Navigation Controls */}
                    <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300">
                        <span className="text-gray-700">&lt;</span>
                    </CarouselPrevious>
                    <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300">
                        <span className="text-gray-700">&gt;</span>
                    </CarouselNext>
                </Carousel>
            </div>
        </div>
    );
}

export default CategoryCarousel;
