import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link"

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

        <div
          id="nav__links"
          className="hidden lg:flex items-center font-bold mx-6 space-x-4 text-gray-100 text-xs"
        >
          {/* Center */}
          <Link href="/whysolar"><a className="hover:underline cursor-pointer link">Why Solar</a></Link>
          <Link href="/ourdifference"><a className="hover:underline cursor-pointer link">Our Difference</a></Link>
          <Link href="/ourprocess"><a className="hover:underline cursor-pointer link">Our Process</a></Link>
          <Link href="/careers"><a className="hover:underline cursor-pointer link">Careers</a></Link>
          <Link href="/contact"><a className="hover:underline cursor-pointer link">Contact Us</a></Link>
        </div>

        <a href="#" class="block bg-yellow-500 hover:bg-yellow-400 rounded-xl py-3 px-4 text-sm text-white font-bold uppercase item-center">
                Get A Quote
            </a>  
      </div>
    </header>
  );
}

export default Header;
