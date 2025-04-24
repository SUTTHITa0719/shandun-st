import * as React from "react";
import { Nunito } from "next/font/google";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const images = [
    "/pictures/bee_1.png"
   
    
] 

export default function GalleryPage() {
  return (
    <div className={`${nunito.variable} font-nunito min-h-screen w-full overflow-x-hidden p-2`}>

        <div className=" w-full bg-white py-10 flex justify-center items-center">
        
            <Carousel className=" w-full max-w-6xl">
                <CarouselContent className="h-full w-1/2  space-x-4">
                    <CarouselItem>
                        <div className="p-4 border rounded-xl text-center font-bold text-xl">
                            <Image
                                src={images[0]}
                                alt="View"
                                width={400}
                                height={400}
                                className="object-cover h-full w-1/2 rounded-xl"
                            />
                        </div>
                    </CarouselItem>
                   

                    
                </CarouselContent>
            </Carousel>

            

        </div>
    </div>    

  );
}
