import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { TAlbumPhotos } from "../../types/IAlbumPhotos";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "./AlbumPhotos.scss";

type Props = {
  items: TAlbumPhotos;
};

export default function AlbumPhotos({ items = [] }: Props) {
  const parametr = {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 1000,
    loop: true,
    modules: [Navigation, Pagination],
    pagination: {
      bulletClass: "custom_swiper_pagination_bullet",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 4,
    },
    navigation: {
      prevEl: ".image_swiper__arrow_prev",
      nextEl: ".image_swiper__arrow_next",
    },
  };

  return (
    <div className="swiper_wrapper">
      <Swiper {...parametr} className="swiper">
        {items &&
          items.map((item, index) => (
            <SwiperSlide key={index} className="swiper_slide">
              <div className="swiper_image_wrapper">
                <img src={item} alt="img" className="image" />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="image_swiper__arrow_wrapper">
        <button className="image_swiper__arrow_prev"></button>
        <button className="image_swiper__arrow_next"></button>
      </div>
    </div>
  );
}
