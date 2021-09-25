import Link from 'next/link';
function When() {

  return (
    <div className="relative w-full grid-cols-flow grid-cols-4 bg-black lg:h-screen text-white ">
      <video
        className="relative w-full lg:object-cover lg:col-span-2 lg:h-screen bg-black opacity-80"
        autoPlay
        loop
        id="video"
        loading="lazy"
      >
        <source src="/videos/tesla-solar-1.mp4" type="video/mp4"></source>
      </video>{" "}
      <div className="mx-5 lg:hidden col-span-1 lg:col-start-1 mt-5 lg:col-end-4 lg:col-span-2">
        <h2 className="text-lg font-extralight lg:grid-col-2">When?</h2>
        <h1 className="text-xl text-gray-300 font-semibold">The Best Time Was Last Year</h1>
        <p className="text-md lg:text-xl py-6 max-w-2xl">
         Making the switch to solar is one of the best investments you could ever put into your home in 2021. Now more than ever, many New Mexican's are cashing in on the benefits they will receive after switching to solar. It has never been easier to make the switch and start saving!
        </p>{" "}
        <div className="w-full mt-20 max-w-160 pb-10">
      
            <div className="lg:bottom-0 lg:absolute">
              <Link href="/savings"><button className="white  hover:bg-gray-100 transition ease-in duration-200 uppercase text-sm w-full ring-2 ring-white hover:text-gray-900 rounded-2xl py-2">
              see your savings
            </button>
              </Link>
 
          </div>
          </div>
      </div>
    </div>
  );
}

export default When;
