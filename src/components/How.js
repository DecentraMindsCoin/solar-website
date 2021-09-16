function How() {
  return (
    <div className="lg:h-screen lg:relative pb-10">
      <div className="relative w-full max-h-1/2">
        <img
          className="relative w-full md:object-cover md:h-96"
          id="img"
          src="/panels-12.png"
        ></img>
      </div>
      <div className="">
        <div className=" grid grid-cols-flow mx-5 mt-5  relative ">
          <div className="">
            <h2 className="text-lg font-extralight">How?</h2>
            <h1 className="text-xl font-semibold">Lets Get Approved</h1>
            <p className="text-md py-6 max-w-2xl">
              Are you considering switching to solar and live in New Mexico.
              Well your in luck because our Solar Team at Meraki Rio wants to
              help you make the switch to solar. Applying only takes 5 minutes,
              and the Meraki Team can answer your every question and concern
              when it comes to solar! You can apply now to simply by clicking
              button below.
            </p>
          </div>
        </div>{" "}
        <div className="lg:absolute lg:bottom-10 lg:mb-0  mb-2 w-full px-5 sm:px-0 space-y-4 sm:space-y-0 mt-20 sm:justify-between sm:flex w-full">
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
  );
}

export default How;
