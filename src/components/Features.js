function Features() {
  return (
    <div className="">
        
      <div className="relative shadow-xl flex-wrap justify-center items-center text-center gap-8 py-8 sm:pt-14 sm:pb-24 bg-red-800">
        {/* <img src="Albuquerque-NM.jpeg" className="flex-grow" width="max" ></img> */}
        <h1 className='pb-16 lg:pb-0 text-5xl font-extrabold text-white underline '>The Meraki <span>Difference</span></h1>
          <div className="sm:flex sm:flex-wrap justify-center mx-3 gap-7 ">
            <div className="w-full sm:w-full lg:w-1/4 px-4 py-4 sm:mt-4 md:mt-5 lg:mt-24 border-4 hover:bg-yellow-400 bg-gray-900 bg-opacity-30 shadow-lg rounded-xl dark:bg-gray-800">
            
          <h3 class="underline text-2xl sm:text-xl  text-white font-semibold dark:text-white py-4">
            Zero Down!
          </h3>
          <img alt="profil" src="/zero-down.png" class="mx-auto object-cover"/>
          <p className="text-md text-white dark:text-gray-300 py-4 px-8">
          There won’t be any added bills to your home. Your power bill will be the same or lower than your previous electric bill, save money instantly!
          </p>
        </div>
        <div className="w-full sm:w-full lg:w-1/4 px-4 py-4 mt-6 sm:mt-0 md:mt-0 lg:mt-24 border-4 hover:bg-yellow-400 bg-gray-900 bg-opacity-30 shadow-lg rounded-xl ">
          <h3 className="underline text-2xl sm:text-xl text-white font-semibold dark:text-white py-4">
            25 Year Warranty!
          </h3>
          <img alt="profil" src="/25-warranty.png" class="mx-auto object-cover"/>
          <p className="text-md text-white d mt-2 py-4 px-8">
          All of our solar systems come standard, and are backed with a 25-year warranty. So you can be confident with your purchase!
          </p>
        </div>
        <div className="w-full sm:w-full lg:w-1/4 px-4 py-4 mt-6 sm:mt-0 md:mt-0 lg:mt-24 border-4 hover:bg-yellow-400 bg-gray-900 bg-opacity-30 shadow-lg rounded-xl ">
          <h3 className="underline text-2xl sm:text-xl text-white font-semibold  py-4">
            Fixed Cost!
          </h3>
          <img alt="profil" src="/fixed-energy-cost-1.png" class="mx-auto object-cover py-10"/>
          <p className="text-md text-white dark:text-gray-300 py-4 px-8">
        Your payments will never go up as electricity rates rise. Take the money that you’ve saved on your electricity bill and put it towards the solar.
          </p>

          
        </div>
         
          </div>
         <div className="flex items-center justify-center w-full pt-14 mb-20">
          <button className=" bg-yellow-500 border-2 border-white w-60 hover:bg-yellow-400 flex items-center font-bold text-white px-4 py-3 rounded-xl ">
            <img
              className="animate-pulse rounded-full shadow-inner bg-yellow-500"
              src="sun-image.png"
              height={30}
              width={30}
              alt="sun-image"
              objectFit
            ></img>
          </button>
        </div>
        
      </div>
      
    </div>
    
  );
}

export default Features;

// <div className="w-full text-white md:text-5xl sm:text-4xl py-10 text-3xl"><h1>Reasons To Make The Switch</h1></div>