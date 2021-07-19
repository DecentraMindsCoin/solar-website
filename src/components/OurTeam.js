import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function OurTeam() {
  return (
    <div className="">
      <div className=" bg-white dark:bg-gray-800 rounded-lg flex-row my-20">
        <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
          Meet Our Solar Specialists!
        </p>
        <p class="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200">
          We make our customers the priority!
        </p>
        <div className="">
        <Carousel 
        className="-mx-10 md:-mx-20  space-x-12"
        infiniteLoop 
        autoPlay 
        centerMode={true} 
        showIndicators={false}
        showStatus={false}
        stopOnHover={true}
        interval={5000}
        >
        
          <div className="item-center grid mx-8">
            <a href="#" class="block relative">
              <img
                alt="profil"
                src="/larry-baca.png"
                class="mx-auto object-contain h-40 w-40 "
              />
            </a>

            <div class="text-center">
              <p class="text-2xl text-gray-800 dark:text-white">
                Larry Baca Jr
              </p>
              <p class="text-xl text-gray-500 dark:text-gray-200 font-light">
                Regional Manager
              </p>
              <p class="text-md text-gray-500 dark:text-gray-400 max-w-full py-4 lg:px-16 font-light">
                Larry is the best solar specialist in New Mexico and Albuquerque
                area. With hundreds of satisfied customer and managing and
                training the Meraki team!
              </p>
            </div>
          </div>

          <div className="grid item-center mx-8">
            <a href="#" class="block relative">
              <img
                alt="profil"
                src="/man-1.png"
                className="mx-auto object-contain h-40 w-40 "
              />
            </a>

            <div class="text-center">
              <p class="text-2xl text-gray-800 dark:text-white">James White</p>
              <p class="text-xl text-gray-500 dark:text-gray-200 font-light">
                Sales Manager
              </p>
              <p class="text-md text-gray-500 dark:text-gray-400 max-w-full lg:px-16 py-4 font-light">
                In charge of customer sales and support, and supplying the best
                possible experience for our customers!
              </p>
            </div>
          </div>

          <div className="grid items-center mx-8">
            <a href="#" class="block relative">
              <img
                alt="profil"
                src="/man-2.png"
                class="mx-auto object-contain h-40 w-40 "
              />
            </a>

            <div class="text-center">
              <p class="text-2xl text-gray-800 dark:text-white">
                Johnny Sandoval
              </p>
              <p class="text-xl text-gray-500 dark:text-gray-200 font-light">
                Sales Lead
              </p>
              <p class="text-md text-gray-500 dark:text-gray-400 max-w-full lg:px-16 py-4 font-light">
                If you want to learn more about the benefits of solar, Johnny is
                your solar specialist ready to speak now!
              </p>
            </div>
          </div>
        </Carousel>    
        </div>
        
      </div>
    </div>
  );
}

export default OurTeam;
