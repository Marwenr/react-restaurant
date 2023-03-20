import SwiperCarousel from '../components/SwiperCarousel/SwiperCarousel'

const Offers = () => {
  const offre = ["offre4", "offre2", "offre1"];
  return (
    <SwiperCarousel
    image={offre}
    navigation={true}
    slidesPreview={1}
    name={"offre"}
  />
  )
}

export default Offers