function Where() {
    return (

            <div className="relative grid grid-cols-flow lg:grid-cols-3 lg:h-screen">
              <div className="bg-black lg:col-start-3 lg:col-end-4">
                    <img className=" opacity-80 relative lg:h-full md:w-full lg:object-cover" id="img" src="/panels-17.jpeg" loading="lazy">
      </img>
              </div>
  
      <div className='lg:absolute lg:w-2/3 mt-5 lg:mt-16 lg:max-w-xl'>
          <div className='mx-5 lg:col-start-1 lg:col-end-1 md:p-0'>
        <h2 className='text-lg font-extralight'>Where?</h2>
        <h1 className="text-xl lg:text-3xl font-semibold">Meraki Solar Rio Rancho</h1>
        <p className="text-md lg:text-xl py-6 sm:col-span-1">
       We are located in the heart of Rio Rancho and serve our all of New Mexico by providing quality solar with our Meraki 25 year gaurantee. We aim to supply optimal solar solutions for every houshold thinking of making the switch to solar.
        </p>
        
       
      </div>
      </div><div className=" mx-4 lg:mx-0 mt-20 mb-10 space-y-5 lg:absolute lg:bottom-5 lg:mb-0  lg:w-2/3 lg:pb-5 lg:px-10">
          <button className="uppercase text-sm w-full "><span className='transition ease-in duration-200 rounded-full border-4 border-gray-800  px-3 py-2 mr-1 hover:bg-gray-900 hover:text-white'>+</span>Learn More</button> 
          <a href="/ordernow" > <button className="hover:text-white transition ease-in duration-200  hover:bg-gray-900 uppercase text-sm w-full ring-4 ring-gray-800 rounded-2xl py-2 mt-5">Order Now</button>   
            </a>  
         
        </div>
    
    </div>

    )
}

export default Where
