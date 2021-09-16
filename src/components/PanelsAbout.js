import Link from "next/link";
const features = [
  { name: "Wattage", description: "425 W." },
  { name: "Temperature", description: "-40°F up to +185°F" },
  { name: "Dimensions", description: '82.4" x 40.9" x 1.57""' },
  { name: "Warranty", description: "25-year guarantee" },
];

export default function PanelsAbout() {
  return (
    <div className="relative lg:bg-black ">
      <div className="bg-black w-full mx-auto h-screen flex lg:max-w-7xl lg:mx-auto ">
        <div className="lg:space-x-12 px-4 grid items-center grid-cols-1 gap-y-0 gap-x-8 md:px-6 sm:py-2 mx-5 lg:px-16 lg:grid-cols-2">
          {" "}
          <div className=" max-w-2xl mx-auto my-3 grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ">
            <img
              src="/screenshot1.png"
              alt=""
              className="bg-gray-100 opacity-70"
            />
            <img
              src="screenshot2.png"
              alt=""
              className="bg-gray-100 opacity-70"
            />
            <img
              src="screenshot3.png"
              alt=""
              className="bg-gray-100 opacity-70"
            />
            <img
              src="screenshot4.png"
              alt=""
              className="bg-gray-100 opacity-70"
            />
          </div>
          <div className="flex flex-col">
          <div className="relative mb-5 lg:text-xl flex-grow w-full mx-auto">
            <h2 className="text-3xl pb-12 text-yellow-500 lg:text-4xl font-extrabold tracking-tight sm:text-3xl">
              Solar Panel Specs
            </h2>
            <p className="lg:text-xl mt-0 text-lg font-light text-gray-100 flex-grow">
              Our panels are made from top of the line materials, and come with
              a 25 year quality gaurantee. We take pride in the panels we sell,
              Meraki aims to provide the best quality solar solutions for our
              customers.
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 ">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 ">
                  <dt className="font-light text-gray-400 mt-2">
                    {feature.name}
                  </dt>
                  <dd className=" text-base text-white">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div></div>
          
          <div className="lg:absolute w-full lg:bottom-10 lg:mb-0 ">
            <Link href="/quote">
              <button className="mx-auto max-w-2xl px-4 hover:bg-gray-100  uppercase text-sm  ring-gray-800 ring-4 text-gray-100 transition duration-200 ease-in rounded-2xl hover:text-black py-2">
                Get Your Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
