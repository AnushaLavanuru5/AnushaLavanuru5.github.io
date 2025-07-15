import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface SlideshowProps {
  images: { src: string; alt?: string }[];
}

export default function Slideshow({ images }: SlideshowProps) {
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      slidesPerView={1}
      loop={true}
      effect="fade"
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="w-full rounded-md overflow-hidden my-2"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img
            src={img.src}
            alt={img.alt ?? `Slide ${i + 1}`}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
