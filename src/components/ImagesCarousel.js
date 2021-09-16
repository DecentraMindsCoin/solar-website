import { Carousel } from "react-responsive-carousel";

import React from "react";

function ImagesCarousel() {
  return ( 
  <section className="text-center border-gray-100 shadow-xl bg-gray-800">
      
    <div className="text-center shadow-xl mb-14">
       <h1 className="py-10 sm:py-16 lg:py-20 text-2xl sm:text-3xl md:text-4xl  lg:text-5xl font-extrabold text-gray-100 underline">
        Meraki Installs
      </h1>
      <div className="opacity-60 sm:mx-20 mx-2 px-4 py-4 border-2 rounded-xl border-gray-300 text-gray-800 font-bold"> 
        <Carousel
          height
          width
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          showArrows={false}
        >
         
          <div className="text-white">
            <img src="/pexels-vivint-solar-2850347.jpg" />
            <p className="py-3 rounded-xl">Northeast Heights</p>
          </div>
          <div className='text-white'>
            <img src="/pexels-vivint-solar-2850472.jpg" />
            <p className="py-3">Rio Rancho</p>
          </div>
          <div className='text-white'>
            <img src="/pexels-vivint-solar-2850472.jpg" />
            <p className="py-3">Cottonwood Area</p>
          </div>
        </Carousel>
      </div>
      <div className='pb-6'>
          <p className='text-white my-9 mx-3 sm:mx-20 sm:my-20 sm:text-xl'>Meraki Rio serves all of New Mexico located in the heart of Rio Rancho, we provide affordable <span className='text-yellow-500 underline cursor-pointer'>Solar Solutions</span> to every household and business looking to invest in solar for the future!    </p>
      </div>
    </div>
  </section>
  
  );
}

export default ImagesCarousel;
