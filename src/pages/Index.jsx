import SwiperCarousel from "../components/SwiperCarousel/SwiperCarousel";
import Category from "../components/Home/Category";
import { menuItems } from "../data/data";

function Index() {
  const offre = ["offre4", "offre2", "offre1"];

  const category = menuItems.map((el) => {
    const images = [];
    el.articles.map((item) => images.push(item.image));
    return <Category images={images} title={el.name} key={el.id} id={el.id} />;
  });

  return (
    <>
      <SwiperCarousel
        image={offre}
        navigation={true}
        slidesPreview={1}
        name={"offre"}
      />

      {category}
    </>
  );
}

export default Index;
