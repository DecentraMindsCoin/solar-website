import { useRouter } from "next/router";
import Image from "next/image";

function Header() {
  const router = useRouter();
  return (
    <header className="sticky pl-2 bg-red-900">
      <div className="flex items-center flex-grow">
        <div className="flex items-center flex-grow sm:flex-row-0 ">
          <Image
            onClick={() => router.push("/")}
            src="/meraki.png"
            width={150}
            height={50}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        <div id="nav__links" className="hidden lg:flex items-center font-bold mx-6 space-x-4 text-gray-100 text-xs">
          {/* Center */}
          <div>
            <p className="hover:underline cursor-pointer link">
              Why Solar
            </p>
          </div>
          <div>
            <p className="hover:underline cursor-pointer link">
              Join The Team
            </p>
          </div>
          <div>
            <p className="hover:underline cursor-pointer link">
              Our Difference
            </p>
          </div>
          <div>
            <p className="hover:underline cursor-pointer link">Our Process</p>
          </div>
          <div>
            <p className="hover:underline cursor-pointer link">Contact Us</p>
          </div>
        </div>
        <button className="right-0 mx-2">
          <div className="hidden lg:flex button cursor-pointer link border-2 border-black px-5 rounded-full bg-yellow-400 object-right">
            Get a Quote!
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
