import Header from "../src/components/Header";
import Footer from '../src/components/Footer'


function quote() {
    return (
        <div><Header />
        <div className='flex flex-col'>
        <div className='pb-10 bg-gray-100 flex-grow w-full mx-auto'>
        <main className="">
          <div className="sm:mx-10 lg:mx-auto max-w-7xl pt-10">
            <div className="lg:grid lg:grid-cols-12 lg:gap- mt-24">
              <div className="sm:text-center lg:max-w-2xl mx-5 lg:col-span-6 lg:text-left lg:flex items-center ">
                <div>
          
                  <h1 className="mt-4 text-3xl tracking-tight font-semibold text-gray-900 sm:mt-5  md:mt-6  md:text-5xl pb-10 text-center">
                    <span className="">Lowest Price On Solar Or Your Money Back!</span>{' '}
                  </h1>
                  <p className="mt-3 font-light text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Design the solar package that fits your home and budget. Our expert Meraki team will help you create the perfect Solar package based off of all of your Solar needs. All we need from you, are a few small details about your home to help assist you with an accurate quote on Solar.  
                  </p>
                 
                </div>
              </div>
              <div className="mx-4  h-full mt-10 my-auto sm:mt-24 lg:mt-0 ring-4 ring-black rounded-xl lg:col-span-6 ">
                <div className="px-3 bg-quote-image bg-opacity-50 min-w-2xl w-full mx-auto rounded-xl">
                  <div className="py-8 sm:px-10 "> <p className="text-lg text-white w-full text-center pb-5 font-semibold">Free Solar Quote In 3 Easy Steps!</p>

                    <div className='flex w-full'>
                     
                      <div className="space-x-2 mt-1 grid grid-cols-3  mx-auto text-xs">
                        <div className='justify-around'>
                          <a
                            href="#"
                            className="border border-gray-300 rounded-md w-full inline-flex justify-center py-2 px-1 shadow-sm bg-gray-400 text-sm text-white"
                          >
                            <div>1. Enter Info</div>
                          </a>
                        </div>

                        <div className=''>
                          <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-1 rounded-md shadow-sm bg-white text-sm  text-gray-500 hover:bg-gray-50"
                          >
                           <div>2. Check Email</div>
                          </a>
                        </div>

                        <div>
                          <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-1 rounded-md shadow-sm bg-white text-sm  text-gray-500 hover:bg-gray-50"
                          >
                           <div>3. View Quote</div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 relative">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500"></span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <form action="#" method="POST" className="space-y-6">
                        <div>
                          <label htmlFor="Full Name" className="sr-only">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            placeholder="Full Name"
                            required
                            className="pl-3 h-8 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
               

                        <div>
                          <label htmlFor="Phone Number" className="sr-only">
                           Phone (optional)
                          </label>
                          <input
                            type="text"
                            name="mobile-or-email"
                            id="mobile-or-email"
                            autoComplete="email"
                            placeholder="Phone (optional))"
                            required
                            className="pl-3 h-8 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div> 
                          <label htmlFor="Address" className="sr-only">
                            Address 
                          </label>
                          <input
                            placeholder="Home Address"
                            required
                            className="pl-3 h-8 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="sr-only">
                            Email
                          </label>
                          <input
                            placeholder="Email"
                            required
                            className="pl-3 h-8 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border-2 border-gray-100 rounded-2xl  shadow-sm text-sm font-medium text-gray-100 bg-transparent hover:bg-gray-300 hover:text-gray-900"
                          >
                            Finished? Click Here To Get Quote...
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="px-4 py-6 border-gray-200  sm:px-10">
                    <p className="text-xs leading-5 text-gray-100">
                      We will not spam you in any way, view our  {' '}
                      <a href="#" className="font-medium text-gray-200 hover:underline">
                        Terms
                      </a>
                      ,{' '}
                      <a href="#" className="font-medium text-gray-200 hover:underline">
                        Data Policy
                      </a>{' '}
                      and{' '}
                      <a href="#" className="font-medium text-gray-200 hover:underline">
                        Cookies Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div> <p className="mt-14 text-xs text-gray-400 uppercase tracking-wide font-regular text-center">Supplying New Mexico With Affordable Solar! </p>
                       <div className="mt-8 w-full lg:ml-0 ">
                    <div className="flex flex-row mx-5 items-start justify-around">
                      <div className="flex justify-center px-1">
                        <img
                          className="h-8 sm:h-10"
                          src="/rio-rancho-logo.png"
                          alt="Rio Rancho"
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-8"
                          src="/Albuquerque-logo.png"
                          alt="Albuquerque"
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        <img
                          className="h-8 sm:h-10"
                          src="/Santa-Fe-logo.png"
                          alt="Sanata Fe"
                        />
                      </div>
                    </div>
                  </div>
          </div>
        </main>
        
        </div>
        <Footer/>
        </div>
        </div>
    )
}

export default quote