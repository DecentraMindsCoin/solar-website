import Header from "../src/components/Header";


import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import Footer from '../src/components/Footer'


function quote() {
    return (
        <div><Header />
        <div className='flex flex-col'>
        <div className='pb-10 bg-gray-700 flex-grow w-full mx-auto'>
        <main className="">
          <div className="sm:mx-10 lg:mx-auto max-w-7xl pt-10">
            <div className="lg:grid lg:grid-cols-12 lg:gap- mt-24">
              <div className="sm:text-center lg:max-w-2xl mx-5 mx-6 lg:col-span-6 lg:text-left lg:flex lg:items-center ">
                <div>
          
                  <h1 className="mt-4 text-3xl tracking-tight font-medium text-white sm:mt-5  md:mt-6  md:text-5xl pb-10 ">
                    <span className="">Lowest Price On Solar Or Your Money Back!</span>{' '}
                  </h1>
                  <p className="mt-3 font-light text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Design the solar package that fits your home and budget. Our expert Meraki team will help you create the perfect Solar package based off of all of your Solar needs. All we need from you, are a few small details about your home to help assist you with an accurate quote on Solar.  
                  </p>
                  <p className="mt-8 text-xs text-white uppercase tracking-wide font-semibold sm:mt-10">Supplying New Mexico </p>
                </div>
              </div>
              <div className="mx-4  h-full mt-10 h-full my-auto sm:mt-24 lg:mt-0 lg:col-span-6 ">
                <div className="px-3 bg-gray-200 min-w-2xl w-full mx-auto rounded-xl">
                  <div className="py-8 sm:px-10 "> <p className="text-sm  text-gray-700 w-full text-center pb-5 font-light">How to get my free quote?</p>

                    <div className='flex w-full'>
                     
                      <div className="mt-1 grid grid-cols-3  mx-auto text-xs">
                        <div>
                          <a
                            href="#"
                            className="border border-gray-300 rounded-md w-full inline-flex justify-center py-2 px-4   shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <div>1. Enter Info</div>
                          </a>
                        </div>

                        <div className=''>
                          <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-4  rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                           <div>2. Check Email</div>
                          </a>
                        </div>

                        <div>
                          <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-4  shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
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
                          <label htmlFor="name" className="sr-only">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            placeholder="Full Name"
                            required
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
               

                        <div>
                          <label htmlFor="mobile-or-email" className="sr-only">
                            # Number
                          </label>
                          <input
                            type="text"
                            name="mobile-or-email"
                            id="mobile-or-email"
                            autoComplete="email"
                            placeholder="Phone #"
                            required
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label htmlFor="password" className="sr-only">
                            Address 
                          </label>
                          <input
                            placeholder="Home Address"
                            required
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="sr-only">
                            Email
                          </label>
                          <input
                            placeholder="Email"
                            required
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border-2 border-black rounded-2xl  shadow-sm text-sm font-medium text-black bg-transparent hover:bg-gray-300 "
                          >
                            Finished? Click Here To Get Quote...
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="px-4 py-6 bg-gray-50 border-gray-200 rounded-xl sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                      We will not spam  {' '}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Terms
                      </a>
                      ,{' '}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Data Policy
                      </a>{' '}
                      and{' '}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Cookies Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
                       <div className=" mt-16 w-full lg:ml-0 ">
                    <div className="flex flex-wrap mx-5 items-start justify-between">
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                          alt="Tuple"
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                          alt="Workcation"
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                          alt="StaticKit"
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