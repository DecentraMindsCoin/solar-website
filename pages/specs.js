import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Link from "next/link";
function specs() {
  return (
    <div className=" w-full  mx-auto flex-col">
      <Header />
      <div className=" bg-black lg:h-screen text-white w-full pb-10">
        <div>
          <section aria-labelledby="details-heading" className="item-center">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-0">
              <div className="lg:border-1 lg:border-r lg:border-white">
                <div className="w-full aspect-w-3 aspect-h-2  overflow-hidden">
                  <img
                    src="panels-1.png"
                    alt=""
                    className="w-full h-96 object-center object-cover"
                  />
                </div>
                <div className="xl:m-6 h-96">
                  <div className=" grid grid-cols-flow mx-5 mt-5 relative ">
                    <div className="">
                      <h2 className="text-lg font-extralight">
                        ZNSHINE Solar Panels
                      </h2>
                      <h1 id="header__title" className="tracking-widest text-xl text-yellow-500 lg:text-3xl font-semibold">
                        Half-Cell Black Monocrystalline
                      </h1>
                      <p className="lg:mt-5 pb-20 text-md lg:text-xl font-extralight py-6 max-w-2xl">
                        Made with selected materials and components to grant
                        quality, dura- tion, efficiency and through outputs, the
                        ZXM6-NH120 monocrystal- line modules by ZNSHINE SOLAR(
                        power output 350 up to 370Wp, represent a highly
                        flexible solution for diverse installation types, from
                        industrial rooftop plants to small home PV systems or
                        large ground surfaces. This allows you to produce clean
                        energy while reducing your energy bill.
                      </p>
                    </div>
                  </div>{" "}
                </div>
                <div className=" mb-2 px-5 sm:px-0 space-y-4 sm:space-y-0  sm:justify-between sm:flex ">
                  <Link href="/znshine">
                    <button className="max-w-lg lg:absolute lg:bottom-8 lg:mx-auto lg:left-4 hover:text-gray-900 transition ease-in duration-200 sm:w-1/2 hover:bg-gray-100 uppercase text-sm w-full  ring-4 ring-gray-800 rounded-3xl py-2 sm:mx-3">
                      Detailed Specs
                    </button>
                  </Link>
                </div>
              </div>
              <div className="lg:border-1 lg:border-l lg:border-white">
                <div className="w-full aspect-w-3 aspect-h-2 overflow-hidden">
                  <img
                    src="/panel-4.png"
                    alt="solar"
                    className="w-full h-96 object-center object-cover"
                  />
                </div>
                <div className="xl:m-6 h-96 relative ">
                  <div className=" grid grid-cols-flow mx-5 mt-5  relative">
                    <div className="text-right">
                      <h2 className="text-lg font-extralight">
                        DNA Solar Panels
                      </h2>
                      <h1 id='header__title' className="tracking-widest text-xl text-yellow-500 lg:text-3xl font-semibold">
                        All Black Bi-Facial Design
                      </h1>
                      <p className="pb-20 text-md font-light lg:text-xl lg:mt-5 py-6 max-w-2xl right-0 absolute">
                      Our DNATM Split Cell Series impressively combines advanced 
solar technologies to maximize performance. Our patented 

Dual Nano Absorber (DNATM) Technology allows the panel to 
operate  at  high-efficencies  in  extreme  temperatures. 

Contact our sales team today to learn more about our line of 

high-efficienty solar panels.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mb-2 px-5 sm:px-0 space-y-4 sm:space-y-0 sm:justify-between sm:flex">
                  <Link href="/dna">
                    <button className="relative max-w-lg md:absolute lg:bottom-8 lg:mx-auto md:right-4 hover:text-gray-900 transition ease-in duration-200 sm:w-1/2 hover:bg-gray-100 uppercase text-sm w-full ring-4 ring-gray-800 rounded-3xl py-2 sm:mx-3">
                      Detailed Specs
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default specs;
