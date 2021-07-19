import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className="relative">
      <div class="bg-white relative overflow-hidden h-1/2 shadow-2xl">
        {/* <img src="/Albuquerque-NM.jpeg" class="absolute h-full w-full object-cover"/> */}
        <div class="inset-2 bg-red-800 absolute xl:bg-white 2xl:ml-48">
          <video
            className="border-b-8 sm:border-none border-white"
            autoPlay
            loop
            muted
            id="video"
          >
            <source src="/videos/solar.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div class="container mx-auto w-4/5 relative z-10 flex items-center py-16 my-24 md:my-32">
          <div class="w-full flex flex-col items-center justify-between relative z-10 sm:mt-auto mt-40">
            <p class="flex flex-col items-center font-extrabold text-5xl text-center md:text-8xl lg:text-10xl text-white">
              So Why <span className="text-yellow-500">Solar?</span>
            </p>
            <p class="flex flex-col max-w-lg text-center items-center font-extrabold text-lg mt-6 text-white mx-3">
              It has never been this easy to start saving money after switching
              to solar. Here at Meraki Solar of Albuquerque, satisfying your
              energy needs is our specialty!
            </p>

            <a
              href="#"
              class="block bg-yellow-500 hover:bg-yellow-400 rounded-xl py-3 px-4 text-lg text-white font-bold uppercase mt-10"
            >
              Learn More!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
