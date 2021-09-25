function specs() {
  return (
    <div className=" w-full h-screen mx-auto flex-col">
      <div className=" bg-black text-white w-full py-10">
        <div>
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center">
            <h2 id="details-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Detailed Solar Panel Specs
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-gray-600">
             Meraki offers the highest quality Solar Panels to New Mexican's every day with our Quality Assurance Guarantee. We have teamed up with world leading Solar Panel manafacturers, engineers, and designers. We want to provide every customer with the best quality Solar in New Mexico, and that is why we offer a 25 year Warranty with our panels.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="w-full aspect-w-3 aspect-h-2  overflow-hidden">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="">
        <div className=" grid grid-cols-flow mx-5 mt-5  relative ">
          <div className="">
            <h2 className="text-lg font-extralight">How?</h2>
            <h1 className="text-xl lg:text-3xl font-semibold">The Switch Is Easy And Affordable!</h1>
            <p className="text-md lg:text-xl py-6 max-w-2xl">
              Are you considering switching to solar and live in New Mexico.
              Well your in luck because our Solar Team at Meraki Rio wants to
              help you make the switch to solar. Applying only takes 5 minutes,
              and the Meraki Team can answer your every question and concern
              when it comes to solar! You can apply now to simply by clicking
              button below.
            </p>
          </div>
        </div>{" "}
        <div className="lg:absolute lg:bottom-10 lg:mb-0  mb-2  px-5 sm:px-0 space-y-4 sm:space-y-0 mt-20 sm:justify-between sm:flex w-full">
          <button className="hover:text-white transition ease-in duration-200 sm:w-1/2 hover:bg-gray-900 uppercase text-sm w-full  ring-4 ring-gray-800 rounded-3xl py-2 sm:mx-3">
            Learn More
          </button>
          <a href="/ordernow" className="w-full sm:mx-3">
            <button className="hover:text-white transition ease-in duration-200 hover:bg-gray-900 uppercase text-sm w-full px-5 ring-4 ring-gray-800 rounded-3xl py-2 mt-5 sm:mt-0">
              Order Now
            </button>
          </a>
        </div>
      </div>
            </div>
            <div>
              <div className="w-full aspect-w-3 aspect-h-2 overflow-hidden">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"
                  alt="Front zipper pouch with included key ring."
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="">
        <div className=" grid grid-cols-flow mx-5 mt-5  relative ">
          <div className="">
            <h2 className="text-lg font-extralight">How?</h2>
            <h1 className="text-xl lg:text-3xl font-semibold">The Switch Is Easy And Affordable!</h1>
            <p className="text-md lg:text-xl py-6 max-w-2xl">
              Are you considering switching to solar and live in New Mexico.
              Well your in luck because our Solar Team at Meraki Rio wants to
              help you make the switch to solar. Applying only takes 5 minutes,
              and the Meraki Team can answer your every question and concern
              when it comes to solar! You can apply now to simply by clicking
              button below.
            </p>
          </div>
        </div>{" "}
        <div className="md:hidden lg:absolute lg:bottom-10 lg:mb-0  mb-2  px-5 sm:px-0 space-y-4 sm:space-y-0 mt-20 sm:justify-between sm:flex w-full">
          <button className="hover:text-white transition ease-in duration-200 sm:w-1/2 hover:bg-gray-900 uppercase text-sm w-full  ring-4 ring-gray-800 rounded-3xl py-2 sm:mx-3">
            Learn More
          </button>
          <a href="/ordernow" className="w-full sm:mx-3">
            <button className="hover:text-white transition ease-in duration-200 hover:bg-gray-900 uppercase text-sm w-full px-5 ring-4 ring-gray-800 rounded-3xl py-2 mt-5 sm:mt-0">
              Order Now
            </button>
          </a>
        </div>
      </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}

export default specs;
