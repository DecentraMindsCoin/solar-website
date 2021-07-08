import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="">
      <div className=" w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20 bottom-0" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/pexels-vivint-solar-2850347.jpg" />
        </div>
        <div></div>
        <img loading="lazy" src="/pexels-pixabay-356036.jpg" />
        <div>
          <img loading="lazy" src="" />
        </div>
      </Carousel>
    </div>
  );
}
export default Banner;
