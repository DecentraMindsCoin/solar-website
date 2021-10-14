function Why() {
  return (
    <div className="lg:h-screen lg:relative pb-10">
      <div className="relative w-full max-h-1/2">
        <img
          className="relative w-full md:object-cover"
          id="img"
          src="/team-pic.jpg"
        ></img>
      </div>
      <div className="">
        <div className=" grid grid-cols-flow mx-5 mt-5  relative ">
          <div className="">
            <h2 className="underline text-lg font-extralight">So why Meraki?</h2>
            <h1 className="tracking-widest font-barriecito text-xl lg:text-3xl font-semibold">We Make It Easy.</h1>
            <p className="text-md lg:text-xl py-6 max-w-2xl">
            We know solar seems complicated, but it doesn’t have to be. See how we can save you money, why switching to solar is a bright idea, and how we can relieve some stress for you along the way.
            </p>
          </div>
        </div>{" "}
        <div className="lg:absolute lg:bottom-10 lg:mb-0  mb-2  px-5 sm:px-0 space-y-4 sm:space-y-0 mt-20 sm:justify-between sm:flex w-full">
          <button className="hover:text-white transition ease-in duration-200 sm:w-1/2 hover:bg-gray-900 uppercase text-sm w-full  ring-4 ring-gray-800 rounded-3xl py-2 sm:mx-3">
            Learn More
          </button>
          <a href="/contact" className="w-full sm:mx-3">
            <button className="hover:text-white transition ease-in duration-200 hover:bg-gray-900 uppercase text-sm w-full px-5 ring-4 ring-gray-800 rounded-3xl py-2 mt-5 sm:mt-0">
             Apply Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Why;
