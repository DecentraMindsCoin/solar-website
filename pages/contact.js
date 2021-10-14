import Header from "../src/components/Header";
import Footer from '../src/components/Footer';

function contact() {
  return (
    <div className="relative bg-gray-200"> 
    <div className=''>
   <Header/>
    </div>
   
      <div className="lg:absolute lg:inset-0 mx-auto">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
          <video
            className="h-48 w-full object-cover lg:absolute lg:h-full"
            src="/videos/edited-cactus.mp4"
            alt=""
            loop
            autoPlay
            muted={true}
          />
        </div>
      </div>
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:w-full lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-auto">
            <h2 className="lg:text-4xl text-3xl font-extrabold tracking-tight -mt-8 pb-8 ">
              Lets Start The Process
            </h2>
            <p className="text-sm text-gray-800 sm:mt-3">
              Enter a few helpful details below, and our Meraki Team will contact you via your preffered contact method to begin the process. You will speak to a member of our expert Solar. Then wait for our
              comfirmation email to show up in your inbox! One of our Solar specialist will be in touch with you as soon as possible.
            </p>
            <form
              action="#"
              method="POST"
              className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="first-name"
                  className=" block text-sm font-semibold  text-gray-700"
                >
                  First Name
                </label>
                <div className="mt-3">
                  <input
                  placeholder=''
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="pl-4 h-12 block w-full shadow-sm sm:text-base focus:border-yellow-500 border border-gray-300 rounded-2xl"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold  text-gray-700"
                >
                  Last Name
                </label>
                <div className="mt-3">
                  <input
                  placeholder=''
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="pl-4 h-12 block w-full shadow-sm sm:text-base focus:border-yellow-500 border border-gray-300 rounded-2xl"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold  text-gray-700"
                >
                  Email
                </label>
                <div className="mt-3">
                  <input
                  placeholder=''
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="pl-4 h-12 block w-full shadow-sm sm:text-base focus:border-yellow-500 border border-gray-300 rounded-2xl"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold  text-gray-700"
                  >
                    Phone
                  </label>
                  <span
                
                    id="phone-description"
                    className=" text-sm text-gray-800"
                  >
                    (optional)
                  </span>
                </div>
                <div className="mt-3">
                  <input  
                  placeholder=''
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    aria-describedby="phone-description"
                    className="pl-4 h-12 block w-full shadow-sm sm:text-base focus:border-yellow-500 border border-gray-300 rounded-2xl"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="average-electric-bill"
                  className="block text-sm font-semibold  text-gray-700"
                >
                  Average Monthly Electric Bill
                </label>
                <div className="mt-3">
                  <input
                  placeholder=''
                    type="text"
                    name="average-electric-bill"
                    id="average-electric-bill"
                    autoComplete="bill-amount"
                    className="pl-4 h-12 block w-full shadow-sm sm:text-base focus:border-yellow-500 border border-gray-300 rounded-2xl"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="how-can-we-help"
                    className="block text-sm font-semibold  text-gray-700"
                  >
                    Additional Information
                  </label>
                  <span
                    id="how-can-we-help-description"
                    className="text-sm text-gray-800"
                  >
                    (max. 500 characters)
                  </span>
                </div>
                <div className="mt-3">
                  <textarea
                  placeholder=''
                    id="how-can-we-help"
                    name="how-can-we-help"
                    aria-describedby="how-can-we-help-description"
                    rows={4}
                    className="pl-4 pt-4 block w-full shadow-sm sm:text-base focus:border-yellow-500 border border-gray-300 rounded-2xl"
                    defaultValue={""}
                  />
                </div>
              </div>
              <fieldset className="sm:col-span-2">
                <legend className="block text-sm font-semibold  text-gray-700">
                  Credit Score
                </legend>
                <div className="mt-4 grid grid-cols-1 gap-y-4">
                  <div className="flex items-center">
                    <input
                      id="poor"
                      name="credit score"
                      defaultValue="poor"
                      type="radio"
                      className="focus:ring-yellow-500 h-12 w-4 text-yellow-500 border-yellow-500"
                    />
                    <label htmlFor="credit score-under-25k" className="ml-3">
                      <span className="block text-sm text-gray-700">
                        300-629
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="fair"
                      name="credit score"
                      defaultValue="fair"
                      type="radio"
                      className="focus:ring-yellow-500 h-12 w-4 text-yellow-500 border-yellow-500"
                    />
                    <label htmlFor="fair" className="ml-3">
                      <span className="block text-sm text-gray-700">
                        630-689
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="good"
                      name="credit score"
                      defaultValue="good"
                      type="radio"
                      className="focus:ring-yellow-500 h-12 w-4 text-yellow-500 border-yellow-500"
                    />
                    <label htmlFor="credit score" className="ml-3">
                      <span className="block text-sm text-gray-700">
                        690-719
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="excellent"
                      name="credit score"
                      defaultValue="excellent"
                      type="radio"
                      className="focus:ring-yellow-500 h-12 w-4 text-yellow-500 border-yellow-500"
                    />
                    <label htmlFor="credit score" className="ml-3">
                      <span className="block text-sm text-gray-700">
                        720-850
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="sm:col-span-2">
                <label
                  htmlFor="how-did-you-hear-about-us"
                  className="block text-sm font-semibold  text-gray-700"
                >
                  How did you hear about us?
                </label>
                <div className="">
                  <input
                  placeholder=''
                    type="text"
                    name="how-did-you-hear-about-us"
                    id="how-did-you-hear-about-us"
                    className="pl-4 h-12 mt-3 shadow-sm ring-1 ring-gray-300 focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-base  rounded-2xl"
                  />
                </div>
              </div>
              <div className="text-right sm:col-span-2 lg:absolute lg:bottom-8">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-8 shadow-sm text-base font-semibold  border-none rounded-2xl text-black bg-yellow-500 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-0"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default contact;
