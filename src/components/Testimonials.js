import { Carousel } from "react-responsive-carousel";

function Testimonials() {
  return (
    <div className="my-20 py-10 mx-8">
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        showArrows={false}
        axis="vertical"
      >
        <div className="bg-white w-full mx-auto py-10">
          {/* <h1 className="mb-10 text-center text-gray-700 font-extrabold text-2xl sm:text-3xl md:text-4xl underline">Customer Satisfaction Gaurantee!</h1> */}
          <p className="text-gray-600 md:text-2xl w-full md:px-10 m-auto text-center sm:text-lg">
            <span className="font-bold text-red-800">“</span>Switching to solar has
            been the best decision of my life! My bill is alot cheaper than I
            expected each month, and the Team at Meraki answered every question,
            every step of the way!
            <span className="font-bold text-red-800">”</span>
          </p>
          <div className="flex items-center justify-center">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="/IMG_1391.JPG"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex ml-2 items-center justify-center">
              <span className="font-semibold text-red-800 mr-2 text-lg">
                Jean Miguel
              </span>
              <span className="text-gray-400 text-xl font-light">/</span>
              <span className="text-gray-400 text-md ml-2 pt-4">Meraki Customer</span>
            </div>
          </div>
        </div>
        <div className="bg-white w-full mx-auto py-10">
          {/* <h1 className="mb-10 text-center text-gray-700 font-extrabold text-2xl sm:text-3xl md:text-4xl underline">Customer Satisfaction Gaurantee!</h1> */}
          <p className="text-gray-600 md:text-2xl w-full md:px-10 m-auto text-center sm:text-lg">
            <span className="font-bold text-red-800">“</span>Switching to solar has
            been the best decision of my life! My bill is alot cheaper than I
            expected each month, and the Team at Meraki answered every question,
            every step of the way!
            <span className="font-bold text-red-800">”</span>
          </p>
          <div className="flex items-center justify-center">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="/IMG_1391.JPG"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex ml-2 items-center justify-center">
              <span className="font-semibold text-red-800 mr-2 text-lg">
                Jean Miguel
              </span>
              <span className="text-gray-400 text-xl font-light">/</span>
              <span className="text-gray-400 text-md ml-2 pt-4">Meraki Customer</span>
            </div>
          </div>
        </div>
        <div className="bg-white w-full mx-auto py-10">
          {/* <h1 className="mb-10 text-center text-gray-700 font-extrabold text-2xl sm:text-3xl md:text-4xl underline">Customer Satisfaction Gaurantee!</h1> */}
          <p className="text-gray-600 md:text-2xl w-full md:px-10 text-center sm:text-lg">
            <span className="font-bold text-red-800">“</span>Switching to solar has
            been the best decision of my life! My bill is alot cheaper than I
            expected each month, and the Team at Meraki answered every question,
            every step of the way!
            <span className="font-bold text-red-800">”</span>
          </p>
          <div className="flex items-center justify-center">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="/IMG_1391.JPG"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex ml-2 items-center justify-center">
              <span className="font-semibold text-red-800 mr-2 text-lg">
                Jean Miguel
              </span>
              <span className="text-gray-400 text-xl font-light">/</span>
              <span className="text-gray-400 text-md pt-4 ml-2">Meraki Customer</span>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Testimonials;
