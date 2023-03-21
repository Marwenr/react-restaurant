import SwiperCarousel from "../SwiperCarousel/SwiperCarousel";
import Button from "../Button/Button";

const Category = ({ images, title, id }) => {
  const widthStyle50 = { width: "50%" };
  const position = id % 2;

  return position !== 0 ? (
    <div
      className="d-flex justify-content-center align-items-center border p-3"
      style={{ backgroundColor: "#e9f2fb" }}
    >
      <div className="text-center" style={{ width: "50%" }}>
        <h1 className="pb-3" style={{ color: "#842029" }}>
          {title}
        </h1>
        <Button contentButton={`OUR ${title}`} />
      </div>
      <SwiperCarousel
        image={images}
        navigation={false}
        slidesPreview={1}
        widthStyle={widthStyle50}
      />
    </div>
  ) : (
    <div
      className="d-flex justify-content-center align-items-center border p-3"
      style={{ backgroundColor: "#e9f2fb" }}
    >
      <SwiperCarousel
        image={images}
        navigation={false}
        slidesPreview={1}
        widthStyle={widthStyle50}
      />
      <div className="text-center" style={{ width: "50%" }}>
        <h1 className="pb-3" style={{ color: "#842029" }}>
          {title}
        </h1>
        <Button contentButton={`OUR ${title}`} />
      </div>
    </div>
  );
};

export default Category;
