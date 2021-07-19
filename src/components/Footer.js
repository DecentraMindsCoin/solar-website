  import Image from "next/image";
function Footer() {
  return (
    <div>
      <footer class="bg-white dark:bg-gray-800 w-full py-8">
        <div class="max-w-screen-xl mx-auto px-4">
          <div className="space-y-3 pb-8 justify-items-center grid-col grid max-w-screen-md mx-auto text-lg">
            <h1 className="underline font-semibold ">Contact Us</h1>
            <h2>(850)-378-1257</h2>
            <h3>support@merakisolutions.com</h3>
            <h3 className="underline font-semibold">Hours: Mon-Sat</h3>
            <h3>8 AM - 9 PM</h3>
            <h4>Locations: Rio Rancho North</h4>
            <Image
              onClick={() => router.push("/")}
              src="/meraki-logo-footer.png"
              width={200}
              height={50}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>

          <ul class="hidden sm:flex justify-items-center grid-col max-w-screen-md mx-auto text-lg font-light flex-wrap justify-center sm:justify-between">
            <li class="my-2">
              <a
                class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                FAQ
              </a>
            </li>
            <li class="my-2">
              <a
                class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                Apply Online
              </a>
            </li>
            <li class="my-2">
              <a
                class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                Why Solar
              </a>
            </li>
            <li class="my-2">
              <a
                class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                Our Difference
              </a>
            </li>
          </ul>
          <div class="justify-items-center grid-col grid max-w-screen-md mx-auto text-lg font-light sm:flex flex-wrap justify-center sm:justify-between">

          </div>            <a
              href="#"
              class="text-gray-400 hover:text-gray-800 pt-8 dark:hover:text-white transition-colors duration-200 justify-items-center grid-col grid"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
              </svg>
            </a>
          <div class="text-center pt-10 sm:pt-12 font-light flex items-center justify-center"></div><hr className=""/>
          <div class="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
            Copyright © 2021 Meraki Solutions
          </div>
          
        </div>
      </footer>
    </div>
  );
}

export default Footer;
