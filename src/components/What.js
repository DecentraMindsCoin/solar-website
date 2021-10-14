function What() {
  return (
    <div className="text-white grid grid-cols-flow bg-black lg:grid-cols-3 lg:h-screen">
      <video
        className="relative w-full lg:object-cover lg:col-span-2 lg:h-screen bg-black opacity-80"
        autoPlay
        loop
        id="video"
        src="/videos/solar-drone.mp4"
      >
      </video>
      <div className="mx-5 lg:mt-16 pb-5 lg:max-w-xl lg:pb-0 my-5 relative">
        <h2 className="text-lg font-extralight">What's the hype?</h2>
        <h1 className="tracking-widest font-barriecito text-xl lg:text-3xl font-semibold">
          Zero Down Solar.
        </h1>
        <p className="text-md lg:text-xl py-6">
        Get solar installed with no Up-Front Costs… Then just pay for the solar power by the month, just like your utility bill, only cheaper! We want to help you save money on your monthly electric bill after switching to solar!
        </p>
        <div className="lg:w-1/2 lg:absolute mt-20 lg:bottom-4 mx-1">
          <a href="/specs">
<button className="hover:text-black transition ease-in duration-200  hover:bg-gray-100 uppercase text-sm w-full ring-4 ring-gray-800 rounded-2xl py-2">
            <span className="left-0  pl-5 absolute"> +</span> Learn More
          </button>

          </a>
          
        </div>
      </div>
    </div>
  );
}

export default What;
