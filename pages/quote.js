import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function quote() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen">
        <div className="pb-10 bg-gray-200 flex-grow w-full mx-auto">
          <main className="">
            <div className="sm:mx-10 lg:mx-auto max-w-7xl pt-10">
              <div className="lg:grid lg:grid-cols-12 mt-24">
                <div className="sm:text-center lg:max-w-2xl mx-5 lg:col-span-6 lg:text-left lg:flex">
                  <div>
                    <h1 className="mt-4 text-5xl tracking-tight font-semibold text-black sm:mt-5  md:mt-6  md:text-5xl pb-10 text-center">
                      <span className="">Go Solar New Mexico!</span>{" "}
                    </h1>
                    <p className="mt-3 font-light text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Design the solar package that fits your home and budget.
                      Our expert Meraki team will help you create the perfect
                      Solar package based off of all of your Solar needs. All we
                      need from you, are a few small details about your home to
                      help assist you with an accurate quote on Solar.
                    </p>
                  </div>
                </div>
                <div className="mx-4 lg:mt-0 mt-14 my-auto sm:mt-24  ring-4 ring-black rounded-xl lg:col-span-6 ">
                  <div id='quote-image' className="px-3 bg-quote-image bg-opacity-50 min-w-2xl w-full mx-auto rounded-xl">
                    <div className="py-8 sm:px-10 ">
                      {" "}
                      <p className="text-2xl underline text-black w-full text-center pb-5 font-bold">
                        Solar Quote In 3 Easy Steps!
                      </p>
                      <div className="flex w-full">
                        <div className="space-x-2 mt-1 grid grid-cols-3  mx-auto text-xs">
                          <div className="justify-around">
                            <a
                              href="#"
                              className="font-semibold hover:bg-gray-500 border border-gray-300 rounded-2xl w-full inline-flex justify-center py-2 px-1 shadow-sm bg-transparent text-sm text-black"
                            >
                              <div>1. Enter Info</div>
                            </a>
                          </div>

                          <div className="">
                            <a
                              href="#"
                              className="font-semibold w-full inline-flex border border-gray-300 justify-center py-2 px-1 rounded-2xl shadow-sm bg-transparent text-sm  text-black hover:bg-gray-500"
                            >
                              <div>2. Click Submit</div>
                            </a>
                          </div>

                          <div>
                            <a
                              href="#"
                              className="font-semibold border border-gray-300 w-full inline-flex justify-center py-2 px-1 rounded-2xl shadow-sm bg-transparent text-sm text-black hover:bg-gray-500"
                            >
                              <div>3. Wait For Call</div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 relative">
                        <div
                          className="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-white text-gray-500"></span>
                        </div>
                      </div>
                      <div className="mt-6">
                        <form
                          action="#"
                          method="POST"
                          className="space-y-6"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          <div>
                            <label htmlFor="First Name" className="sr-only">
                              First Name
                            </label>
                            <input
                              type="text"
                              name="First Name"
                              {...register("firstName")}
                              id="firstName"
                              autoComplete="First Name"
                              placeholder="First Name"
                              required
                              className="pl-3 h-12 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-2xl"
                            />
                          </div>
                          <div>
                            <label htmlFor="Last Name" className="sr-only">
                              Last Name
                            </label>
                            <input
                              type="text"
                              name="Last Name"
                              {...register("lastName")}
                              id="lastName"
                              placeholder="Last Name"
                              required
                              className="pl-3 h-12 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-2xl"
                            />
                          </div>
                          <div>
                            <label htmlFor="Phone Number" className="sr-only">
                              Phone Number
                            </label>
                            <input
                              placeholder="Phone Number"
                              {...register("phoneNumber")}
                              required
                              className="pl-3 h-12 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-2xl"
                            />
                          </div>
                          <div>
                            <label htmlFor="State" className="sr-only">
                              State
                            </label>
                            <input
                              placeholder="State"
                              required
                              {...register("state")}
                              className="pl-3 h-12 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-2xl"
                            />
                          </div>{" "}
                          <div>
                            <label htmlFor="Zip" className="sr-only">
                              Zip
                            </label>
                            <input
                              placeholder="Zip"
                              {...register("firstName")}
                              required
                              className="pl-3 h-12 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-2xl"
                            />
                          </div>
                          <div>
                            <label htmlFor="Email" className="sr-only">
                              Email Address
                            </label>
                            <input
                              placeholder="Email Address"
                              required
                              {...register("email")}
                              className="pl-3 h-12 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-2xl"
                            />
                          </div>
                          <div >
                            <select className="px-4 py-2 rounded-2xl" {...register("contactMethod")}>
                              <option value="">Preffered Contact Method...</option>
                              <option value="Phone Call">Phone Call</option>
                              <option value="Personal Email">
                                Personal Email
                              </option>
                            </select>
                          </div>
                          <div>
                            {result}
                            <button
                              type="submit"
                              className="mt-10 w-full flex justify-center py-2 px-4 rounded-2xl  shadow-sm text-sm font-medium text-black bg-yellow-500 hover:bg-yellow-300 hover:text-gray-900"
                            >
                              Get My Quote
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="px-4 py-6 border-gray-200  sm:px-10">
                      <p className="text-xs leading-5 text-black">
                        We will not spam you in any way, view our{" "}
                        <a
                          href="#"
                          className="font-medium text-gray-700 hover:underline"
                        >
                          Terms
                        </a>
                        ,{" "}
                        <a
                          href="#"
                          className="font-medium text-gray-700 hover:underline"
                        >
                          Data Policy
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="font-medium text-gray-700 hover:underline"
                        >
                          Cookies Policy
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <p className="mt-14 text-xs text-gray-400 uppercase tracking-wide font-regular text-center">
                Supplying New Mexico With Affordable Solar!{" "}
              </p>
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
                      className="rounded-2xl h-8 sm:h-9"
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
        <Footer />
      </div>
    </div>
  );
}
