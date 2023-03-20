// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "./styles.module.css"

const SwiperCarousel = ({ image, navigation, slidesPreview, widthStyle, name }) => {
  const { foodImg, offreImg } = styles
  const swiperSlide = image.map((el, index) => {
    const image = require(`../../assets/imgs/${el}.png`);
    return (
      <SwiperSlide className="text-center" key={index}>
        <img src={image} alt="food" className={name ? offreImg : foodImg} />
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      navigation={navigation}
      modules={[Navigation]}
      slidesPerView={slidesPreview}
      className=""
      style={widthStyle}
    >
      {swiperSlide}
    </Swiper>
  );
};

export default SwiperCarousel;
