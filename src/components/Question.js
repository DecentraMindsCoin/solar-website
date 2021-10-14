function Question() {
  return (
    <div className=" mt-10 bg-black text-white sm:mt-0 grid grid-cols-flow lg:h-screen relative lg:grid-cols-4">
      <video
        className="relative lg:object-cover lg:col-start-3 lg:col-end-5 lg:h-screen"
        autoPlay
        loop
        id="video"
        src="/videos/purple-mountain-nm.mp4"
      ></video>
      <div className="mx-5 bg- mt-4 lg:mt-16 pb-5 lg:pb-0 relative lg:h-screen lg:absolute lg:col-start-0 lg:col-end-3">
        <h2 className="text-lg font-extralight">Have A Question?</h2>
        <h1 className="tracking-widest font-barriecito text-xl font-semibold lg:text-3xl">
          We Are On Stand By
        </h1>
        <p className=" text-md lg:text-xl py-6 md:max-w-xl">
          Our Meraki solar specialist are waiting for your call. Want to get an
          estimate on solar for your home? Are you still unsure about the
          benefits of switching to solar? Well we have good news! Our trained
          Meraki solar experts are here for your every question and concern!
        </p>
        <a href="/contact" className="lg:absolute lg:bottom-16">
          <button className="hover:text-black transition ease-in duration-200 hover:bg-gray-100 uppercase px-7 text-sm w-full ring-4 ring-gray-800 rounded-2xl mt-20 mb-10 py-2">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
}

export default Question;
