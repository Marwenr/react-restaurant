import SwiperCarousel from "../components/SwiperCarousel/SwiperCarousel";
import Button from "../components/Button/Button"

function Index() {

  const lunchBox = ["sandwich", "sandwich2"];
  const pizzas = ["pizza1", "pizza2"];
  const drinks = ["cola", "water"];
  const offre = ["offre4", "offre2", "offre1"];


  const widthStyle50 = { width: "50%" };

  return (
    <>
      <SwiperCarousel
      image={offre}
      navigation={true}
      slidesPreview={1}
      name={"offre"}
    />

      <div
        className="d-flex justify-content-center align-items-center border p-3"
        style={{ backgroundColor: "#e9f2fb" }}
      >
        <div className="text-center" style={{ width: "50%" }}>
          <h1 className="pb-3" style={{ color: "#842029" }}>
            LUNCH BOX
          </h1>
          <Button contentButton={"OUR LUNCH BOX"} />
        </div>
        <SwiperCarousel
          image={lunchBox}
          navigation={false}
          slidesPreview={1}
          widthStyle={widthStyle50}
        />
      </div>

      <div
        className="d-flex justify-content-center align-items-center  border p-3"
        style={{ backgroundColor: "#e9f2fb" }}
      >
        <SwiperCarousel
          image={pizzas}
          navigation={false}
          slidesPreview={1}
          widthStyle={widthStyle50}
        />
        <div className="text-center" style={{ width: "50%" }}>
          <h1 className="pb-3" style={{ color: "#842029" }}>
            PIZZAS - THE CLASSICS
          </h1>
          <Button contentButton={"OUR PIZZAS"} />
        </div>
      </div>

      <div
        className="d-flex justify-content-center align-items-center  border p-3"
        style={{ backgroundColor: "#e9f2fb" }}
      >
        <div className="text-center" style={{ width: "50%" }}>
          <h1 className="pb-3" style={{ color: "#842029" }}>
            DRINKS
          </h1>
          <Button contentButton={"OUR DRINKS"} />
        </div>
        <SwiperCarousel
          image={drinks}
          navigation={false}
          slidesPreview={1}
          widthStyle={widthStyle50}
        />
      </div>
    </>
  );
}

export default Index;
