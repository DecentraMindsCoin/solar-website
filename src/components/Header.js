import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link"

function Header() {
  const router = useRouter();
  return (
    <header className="z-10 py-5 w-full pl-2 xl:bg-opacity-10 bg-transparent xl:shadow-lg xl:bg-black absolute top-0 px-3">
      <div className="flex items-center ">
        <div className="flex items-center ml-2 flex-grow ">
          <Image
            onClick={() => router.push("/")}
            src="/logo_black.png"
            width={35}
            height={35}
            objectFit="cover"
            className="cursor-pointer"
          />
        </div>

        <div
          className="hidden xl:flex items-center font-bold mx-6 space-x-12 text-gray-900 text-md  mr-20"
        >
          {/* Center */}
          <Link href="/whysolar"><a className="hover:underline cursor-pointer link">Why Solar</a></Link>
          <Link href="/ourdifference"><a className="hover:underline cursor-pointer link">Our Difference</a></Link>
          <Link href="/ourprocess"><a className="hover:underline cursor-pointer link">Our Process</a></Link>
          <Link href="/contact"><a className="hover:underline cursor-pointer link">Contact Us</a></Link>
        </div>  <a href="/quote" className="block transition ease-in duration-200 bg-yellow-500 hover:bg-yellow-400 rounded-3xl px-5 text-sm z-100 item-center font-semibold text-black py-2 mx-5 bg-opacity-60">
                Quote
            </a>  
       
      </div>
    </header>
  );
}

export default Header;
