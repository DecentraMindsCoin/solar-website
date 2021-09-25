function What() {
  return (
    <div className="text-white grid grid-cols-flow bg-black lg:grid-cols-3 lg:h-screen">
      <video
        className="relative lg:col-span-2  opacity-80 lg:h-full lg:object-cover"
        autoPlay
        loop
        id="video"
        loading="lazy"
      >
        <source src="/videos/tesla-solar-1.mp4" type="video/mp4"></source>
      </video>
      <div className="mx-5 lg:mt-16 pb-5 lg:max-w-xl lg:pb-0 my-5 relative">
        <h2 className="text-lg font-extralight">What?</h2>
        <h1 className="text-xl lg:text-3xl font-semibold">Quality Solar Panels</h1>
        <p className="text-md lg:text-xl py-6">
          Our Solar Panels are quality tested and assured to be made from the
          best quality materials, and designed by top level engineers. We trust
          our product so much, that Meraki includes a 25 year guarantee with
          every solar package! We have expert technician that can installs
          panels on any size rooftop!
        </p>
        <div className="lg:w-1/2 lg:absolute mt-20 lg:bottom-4 mx-1">
          <button className="hover:text-black transition ease-in duration-200  hover:bg-gray-100 uppercase text-sm w-full ring-4 ring-gray-800 rounded-2xl py-2">
            <span className="left-0 pl-5 absolute"> + </span> Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default What;
