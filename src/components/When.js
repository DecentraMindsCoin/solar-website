import Link from 'next/link';
function When() {

  return (
    <div className="relative w-full bg-black lg:h-screen text-white ">
      <div className='mx-auto'>
        <div className="2xl:max-h-96" >
            <img className="2xl:h-screen h-full w-full object-cover my-auto" id="img" src="/panels-13.png" loading="lazy">
        </img>
          </div>
      </div>
          

      <div className="mx-5 mt-5">
        <h2 className="text-lg font-extralight lg:grid-col-2">How can we help you?</h2>
        <h1 className="tracking-widest font-barriecito text-xl lg:text-3xl text-gray-300 font-semibold">The Meraki Difference.</h1>
        <p className="text-md lg:text-xl py-6 max-w-2xl">
        We’ll compare and contrast our solar brands to find you the best solar solution, for the best price that fits your energy needs. Allow our Meraki Solar Team to answer every question you may have about solar.
        </p>{" "}
        <div className="w-full mt-20 max-w-160 pb-10">
      
            <div className="lg:bottom-8 lg:absolute">
              <Link href="/savings"><button className="white  hover:bg-gray-100 transition ease-in duration-200 uppercase text-sm w-full ring-2 ring-white hover:text-gray-900 rounded-2xl py-2 lg:mx-10">
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
