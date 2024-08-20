import AppLayout from "@/layouts/_app";
import Image from "next/image";

import shirt1 from '@/assets/shirts/Shirt-1.svg'
import shirt2 from '@/assets/shirts/Shirt-2.svg'
import shirt3 from '@/assets/shirts/Shirt-3.svg'
import shirt4 from '@/assets/shirts/Shirt-4.svg'
import shirt5 from '@/assets/shirts/Shirt-5.svg'

import { HomeContainer, Product } from "./styles";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <AppLayout>
      <HomeContainer>

        <Carousel className="min-h-[656px]">
          <CarouselContent className="min-h-[656px]">
            {Array.from({ length: 5 }).map((_, i) => {
              return (
                <CarouselItem className="min-h-[656px] md:basis-2 lg:basis-1/3 pl-8" key={i}>
                  <Product>
                    <Image src={shirt1} width={520} height={480} alt="" className="object-cover" />

                    <footer className="absolute bottom-1 left-1 right-1 rounded-[6px] flex items-center justify-between bg-black/[0.6] p-4">
                      <strong className="text-lg">Camiseta X</strong>
                      <span className="text-xl font-bold text-light">R$ 79,90</span>
                    </footer>
                  </Product>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>

      </HomeContainer>
    </AppLayout>
  );
}
