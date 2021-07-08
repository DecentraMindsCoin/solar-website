import Head from "next/head";
import Header from "../src/components/Header";
import Banner from "../src/components/Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <Header />
      </div>
      {/* Hero*/}
      <div>
        <Banner />
      </div>

      {/* Footer */}
    </div>
  );
}
