  import Image from "next/image";
function Footer() {
  return (
    <div className=''>
      <footer id="footer" className="relative min-screen-full lg:flex-row  bg-black text-white pt-8">
        <div className="lg:flex-grow"> <ul className="hidden xl:hidden  sm:flex justify-items-center pb-10 mx-5 grid-col mx-auto text-lg font-light flex-wrap justify-center sm:justify-around">
            <li className="my-2">
              <a
                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                FAQ
              </a>
            </li>
            <li className="my-2">
              <a
                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                Apply Online
              </a>
            </li>
            <li className="my-2">
              <a
                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                Why Solar
              </a>
            </li>
            <li className="my-2">
              <a
                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                Our Difference
              </a>
            </li>
          </ul>
          <div className="space-y-3 justify-items-center grid-col grid max-w-screen-md mx-auto text-lg">
            <h1 className="underline font-semibold ">Contact Us</h1>
            <h2>(850)-378-1257</h2>
            <h3>support@merakisolutions.com</h3>
            <h3 className="underline font-semibold">Hours: Mon-Sat</h3>
            <h3>8 AM - 9 PM</h3>
            <h4>Locations: Rio Rancho North</h4>
            <div className=''><a
              href="#"
              className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 justify-items-center grid-col grid pb-10"
            > <h1 className="text-white"> Check Us Out On:</h1><span></span>
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
              </svg>
                     
            </a>
            <div> <Image
              onClick={() => router.push("/")}
              src="/meraki-logo-footer.png"
              width={200}
              height={50}
              objectFit="contain"
              className="relative cursor-pointer"
            />
    
            </div>
           
            </div>
          
          </div>  

         
          <div className="justify-items-center grid-col grid max-w-screen-md mx-auto text-lg font-light sm:flex flex-wrap justify-center sm:justify-between">

          </div>            
          <div className="relative text-center pt-10 sm:pt-12 font-light h-full flex items-center justify-center"></div><hr className="absolute bottom-0 "/>
          <div className="text-center  bg-gray-600 text-white py-5 font-light flex-grow items-center justify-center">
            Copyright © 2021 Meraki Solutions
          </div>
          
        </div>
      </footer>
    </div>
  );
}

export default Footer;
