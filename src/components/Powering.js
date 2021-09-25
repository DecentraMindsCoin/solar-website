import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

function Powering() {
  return (
    <div className="w-full relative sm:h-screen shadow-xl bg-black px-4 p-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center mt-16 mb-10 md:mt-12 text-4xl  font-extrabold text-gray-100 sm:text-4xl lg:text-6xl">
          {" "}
          <span className="text-yellow-500 cursor-pointer animate-pulse hover:text-white">
            Powering
          </span>{" "}
          New Mexico!
        </h2>  <div className="ring-4  ring-black">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          showArrows={false}
          className="relative  transition ease-in-out duration-200 opacity-70  lg:flex lg: object-cover mt-12 sm:mt-20  max-w-3xl m-auto"
          autoPlay={true}
          width
          loading=""
        >
          <div className="relative  flex">
            <img src="/larry1.png" className="w-full  flex object-cover" loading=""></img>
          </div>
          <div className=" relative  flex">
            <img src="/larry2.png" className="w-full flex object-cover " loading=""></img>
          </div>
          <div className="relative flex">
            <img src="/larry3.png" className="w-full flex object-cover  " loading=""></img>
          </div>
          <div className="relative flex">
            <img src="/larry4.png" className="w-full flex object-cover " loading=""></img>
          </div>
          <div className="relative flex">
            <img src="/larry5.png" className="w-full flex object-cover " loading=""></img>
          </div>
          <div className="relative flex">
            <img src="/larry6.png" className="w-full flex object-cover " loading=""></img>
          </div>
          <div className="relative flex">
            <img src="/larry7.png" className="w-full flex object-cover " loading=""></img>
          </div>

          <div className="relative flex">
            <img src="/larry9.png" className="w-full flex object-cover " loading=""></img>
          </div>
          <div className="relative flex">
            <img src="/larry10.png" className="w-full flex object-cover " loading=""></img>
          </div>
        </Carousel>
      </div>
      
      <p className='text-yellow-500 text-sm font-light py-3'>-<span className='italic text-gray-400'>"Satisfying our awesome customers comes first, by offering the best prices in New Mexico on the highest quality Solar!" 
      </span> - Larry Baca Jr, Meraki Solar Regional Manager  </p><div className=''>
        <p className="mx-1 text-base lg:text-xl md:text-lg font-extralight sm:mt-10 text-white py-12">
          Meraki helps thousands of New Mexican's make the switch to solar each
          year. We have customers all across Rio Rancho,  Albuquerque and the entire state of New Mexico! We aim to satisfy every household with our Meraki Solar
          Gaurantee!  It only
          takes a few minutes to get a free quote. Meraki offers the highest grade Solar Panels, at the lowest possible price! We will make sure your investment into Solar  pays off with immediate savings!
        </p></div>
           <div className='w-full flex pb-4 md:pb-4 sm:pr-7 md:pr-8  sm:max-w-3xl md:pl-4  sm:absolute sm:bottom-10'> <Link href="/quote">
          <button className="w-full rounded-3xl shadow-xl hover:bg-gray-300 uppercase text-sm  ring-gray-800 ring-4 text-gray-100 transition duration-200 ease-in  hover:text-black py-2">
            Get Your Quote
          </button>
        </Link>
        </div>
       
      
      </div>
    


    </div>
  );
}

export default Powering;
