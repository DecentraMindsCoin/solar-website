import Link from "next/link";

function Who() {

    return (
        <div className="grid grid-cols-flow lg:h-screen">
          <div className="bg-black" >
            <img className="relative  opacity-80 sm:h-full max-w-2/3 md:object-cover lg:col-start-0 lg:col-end-0" id="img" src="/panels-13.png" loading="lazy">
        </img>
          </div>
        
        <div className='lg:col-start-4 lg:col-end-3 mx-5 lg:mt-16 lg:max-w-xl my-5 relative'>
          <h2 className='text-lg font-extralight'>Who?</h2>
          <h1 className="text-xl font-semibold">Our Neighbors </h1>
          <p className="text-md py-6 sm:col-span-1">
          Meraki Solar is dedicated to serving you, the community and our neighbors. We make the transition to Solar easy, fun, and affordable. Our team will make sure to answer any questions you may have when thinking about going Solar. Have a question? Lets chat now!
          </p>
          <div className="text-gray-900 justify-between w-full mt-20 lg:bottom-0 lg:absolute pb-5 flex">
            <button className="uppercase text-sm w-1/2 sm:w-1/4 lg:w-1/3 mr-3"><span className='rounded-full ring-4 transition ease-in ring-gray-900 mr-3 px-3 py-2  hover:bg-gray-900 hover:text-white'>+</span>Learn More</button> 
            <Link href="/contactus"><button className=" hover:text-white transition ease-in hover:bg-gray-900 uppercase text-sm w-3/4 ring-4 ring-gray-900 rounded-2xl py-2">Lets Chat</button> 
            </Link>
              
          </div>
         
        </div>
      </div>
    )
}

export default Who
