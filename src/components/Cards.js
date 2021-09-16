function Cards() {
  return (
    <div classNameName=''>
      <div><h1 classNameName="text-center text-gray-800 mt-20 text-3xl mx-4 sm:text-4xl font-extrabold underline">The Solution Is Understanding "123"</h1>
      <div classNameName="shadow-xl sm:flex flex-wrap justify-center items-center text-center gap-6 py-14">
        
        <div className="w-full  sm:w-1/4 md:w-1/4 lg:w-1/4 px-4  py-4 bg-white mt-6 shadow-lg rounded-lg dark:bg-gray-800">
          <div className="flex-shrink- cursor-pointer  ring-4 ring-gray-300 rounded-xl">
            <img
              src="/solar-save.png"
              width="20"
              height="20"
              loading="lazy"
              classNameName="h-full w-full rounded-xl opacity-80"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            ></img>
            {/* <div className="flex items-center mx-auto justify-center h-20 w-20 rounded-md bg-red-700 text-white"></div> */}
          </div>
          <h3 className="text-xl underline mt-5 sm:text-xl font-semibold text-gray-700">
            <span>1. </span>Save Money
          </h3>
          <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
            Instantly start reducing your monthly electric bill and put more money in your pocket.
          </p>
        </div>
        <div className="sm:w-1/4 md:w-1/4 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
          <div className="flex-shrink-0 ring-4 ring-gray-300 rounded-xl">
            <img
              src="/save-planet.png"
              width="20"
              height="20"
              loading="lazy"
              className="h-full w-full rounded-xl opacity-80"
            ></img>
            {/* <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-red-700 text-white"></div> */}
          </div>
          <h3 className="text-xl underline mt-5 sm:text-xl text-gray-700 font-semibold dark:text-white">
          <span>2. </span>Help The Planet
          </h3>
          <p className="text-md text-gray-500 dark:text-gray-300 py-4">
            Solar is an efficient and renewable energy source that helps the
            environment.
          </p>
        </div>
        <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
          <div className="flex-shrink-0 ring-4 ring-gray-300 rounded-xl">
            <img
            src="/unlimited-sun.png"
              width="20"
              height="20"
              loading="lazy"
              classNameName="h-full w-full opacity-80 rounded-xl"
            ></img>
            {/* <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-red-700 text-white"></div> */}
          </div>
          <h3 className="text-xl underline mt-5 sm:text-xl text-gray-700 font-semibold dark:text-white">
          <span>3. </span>Unlimited Energy
          </h3>
          <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
            The Sun is incredibely reliable, and gives off unlimited free energy for us to utilize.
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Cards;
