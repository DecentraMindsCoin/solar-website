import {
  ArrowDownIcon,
  SunIcon,
  CashIcon,
  EyeOffIcon,
} from "@heroicons/react/solid";
import { useScrollIndicator } from "react-use-scroll-indicator";
import Link from "next/link";

function Banner() {
  return (
    <div className="z-2 w-full h-full">
      <div className="relative bg-black">
        <div className="relative  text-center  text-5xl">
          <div className="">
            <div
              id="banner-header"
              className="z-10 min-screen-3xl absolute inset-0 justify-center w-full lg:max-w-8xl"
            >
              <div className="relative">
                <div className=''>
                  <img
                  src="/MerakiZeroDown.png"
                  className="lg:max-w-5xl mx-auto mt-12 sm:mt-14 "
                ></img>
                </div>
                
                <div className="mx-8">
                  <p className="tracking-widest font-barriecito font-Oxygen sm:hidden text-gray-200 sm:py-5 text-xl font-semibold sm:inset-0 w-full justify-center px-12 -mt-24">
                    Solar Made Simple.
                  </p>
                </div>
              </div>
            </div>

            <div className="opacity-80">
              {" "}
              <video
                className="relative max-h-screen h-screen object-cover sm:hidden"
                autoPlay
                loop
                muted
                id="video"
                src="/videos/edited-cactus.mp4"
                type="jpeg"
              ></video>
            </div>
          </div>
          <div className=" max-w-md">
            <div className="absolute z-10 bottom-0 w-full text-xl px-3 text-white">
              <p className="hidden font-Oxygen sm:block py-10 font-semibold inset-0 w-full justify-center mx-auto  lg:text-2xl text-center px-5">
              We’ll handle everything from start to finish, making sure you get exactly what you want out of a solar company.
              </p>
              <div className="grid grid-flow-row-dense md:mx-auto sm:max-w-7xl font-normal sm:grid-flow-col grid-rows-2 grid-cols-3 sm:grid-rows-1 gap-none text-xs lg:text-base">
                <div className="px-3 pb-10">
                  <SunIcon className=" hover:scale-110 transform h-10 w-full hover:text-yellow-400" />{" "}
                  <p className="w-full"> Convert Sunlight to Energy</p>
                </div>
                <div className="px-3">
                  {" "}
                  <CashIcon className="hover:scale-110 transform h-10 w-full hover:text-yellow-400" />
                  <p className="w-full"> Save Money On Electricity</p>
                </div>
                <div className="px-3 ">
                  {" "}
                  <EyeOffIcon className=" hover:scale-110 transform h-10 w-full hover:text-yellow-400" />{" "}
                  <p className="w-full">No Down Payment Required</p>
                </div>
                <Link href="/contact">
                  <button className=" hover:scale-105 transform uppercase col-span-full sm:h-12 h-10 sm:col-span-2 md:row-span-1 ring-4 ring-gray-700 rounded-3xl w-full mb-8 px-7 py-2 hover:bg-gray-100 bg-black hover:text-black text-sm font-regular text-white transition ease-in duration-200">
                    Apply Now
                  </button>
                </Link>
              </div>
              <div className="relative flex animate-bounce sm:my-5 xl:8">
                <ArrowDownIcon className="w-full h-8" />
              </div>
            </div>
          </div>
          <div className="bg-black">
            <video
              className="relative opacity-80 hidden h-screen object-cover w-full sm:flex sm:items-end"
              autoPlay
              loop
              muted
              id="video"
              src="/videos/edited-cactus.mp4"
              type="png"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
