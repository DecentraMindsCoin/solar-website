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
              <div className="relative ">
                <img
                  src="/MerakiZeroDown.png"
                  className=" lg:max-w-5xl mx-auto mt-12 sm:mt-14 "
                ></img>
                <div className="mx-8">
                  <p className="font-Oxygen sm:hidden text-gray-100 sm:py-10 text-sm font-light sm:inset-0 w-full justify-center px-12 -mt-20">
                    Lowest Cost Solar Panels in New Mexico! Money back
                    guarantee.
                  </p>
                </div>
              </div>
            </div>

            <div className="opacity-80">
              {" "}
              <img
                className="relative max-h-screen h-screen object-cover sm:hidden"
                autoPlay
                loop
                muted
                id="video"
                src="/riorancho3.png"
                type="jpeg"
              ></img>
            </div>
          </div>
          <div className=" max-w-md">
            <div className="absolute z-10 bottom-0 w-full text-xl px-3 text-white">
              <p className="hidden font-Oxygen sm:block py-10 font-bold inset-0 w-full justify-center mx-auto shadow-xl underline lg:text-2xl text-center px-5">
                Lowest Cost Solar Panels in New Mexico! Money back guarantee.
              </p>
              <div className="grid grid-flow-row-dense md:mx-auto sm:max-w-7xl font-normal sm:grid-flow-col grid-rows-2 grid-cols-3 sm:grid-rows-1 gap-none text-xs lg:text-base shadow-xl">
                <div className="px-3 pb-10">
                  <SunIcon className="h-10 w-full hover:text-yellow-400" />{" "}
                  <p className="w-full"> Convert Sunlight to Energy</p>
                </div>
                <div className="px-3">
                  {" "}
                  <CashIcon className="h-10 w-full hover:text-yellow-400" />
                  <p className="w-full"> Gauranteed Lowest Price on Solar</p>
                </div>
                <div className="px-3 ">
                  {" "}
                  <EyeOffIcon className="h-10 w-full hover:text-yellow-400" />{" "}
                  <p className="w-full">No Down Payment Required</p>
                </div>
                <Link href="/ordernow">
                  <button className="uppercase col-span-full h-12 sm:col-span-2 md:row-span-1 ring-4 ring-gray-800 rounded-3xl w-full mb-8 px-7 py-2 hover:bg-gray-100 bg-black hover:text-black text-sm font-regular text-white transition ease-in duration-200">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="relative flex animate-bounce sm:my-5 xl:8">
                <ArrowDownIcon className="w-full h-8" />
              </div>
            </div>
          </div>
          <div className="bg-black">
            <img
              className="relative opacity-80 hidden h-screen object-cover w-full sm:flex sm:items-end"
              autoPlay
              loop
              muted
              id="video"
              src="/riorancho3.png"
              type="png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
