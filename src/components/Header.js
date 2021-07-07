import Image from "next/image";

function Header() {
  return (
    <header className="">
      <Image
        src="/meraki.png"
        width={150}
        height={40}
        objectFit="contain"
        className="cursor-pointer"
      />
      <div></div>
    </header>
  );
}

export default Header;
