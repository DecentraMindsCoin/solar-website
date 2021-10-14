import Link from "next/link";

function Who() {
  return (
    <div className="grid grid-cols-flow lg:h-screen">
      <video
        className="relative lg:col-span-2 lg:h-full lg:object-cover"
        autoPlay
        loop
        id="video"
        loading="lazy"
        muted
      >
        <source src="/videos/balloon-nm.mp4" type="video/mp4"></source>
      </video>

      <div className="lg:col-start-4 lg:col-end-3 mx-5 lg:mt-16 lg:max-w-xl my-5 relative">
        <h2 className="text-lg font-extralight">Who do we help?</h2>
        <h1 className="tracking-widest font-barriecito text-xl lg:text-3xl font-semibold">Our Neighbors </h1>
        <p className="text-md lg:text-xl py-6 sm:col-span-1">
          Meraki Solar is dedicated to bringing quality rooftop solar to New Mexico and our neighbors. We make your experience simple, fun, and affordable when making the switch. Find out how thousands of New Mexican's use Meraki Solar to save money instantly.
        </p>
        <div className="text-gray-900 justify-between w-full mt-20 lg:bottom-0 lg:absolute pb-5 flex">
          <button className="uppercase text-sm w-1/2 sm:w-1/4 lg:w-1/3 mr-3">
            <span className="rounded-full ring-4 transition ease-in ring-gray-900 mr-3 px-3.5 py-2  hover:bg-gray-900 hover:text-white">
              +
            </span>
            Learn More
          </button>
          <Link href="/contact">
            <button className=" hover:text-white transition ease-in hover:bg-gray-900 uppercase text-sm w-3/5 ring-4 ring-gray-900 rounded-2xl py-2">
              Lets Chat
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Who;
