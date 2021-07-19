import Head from "next/head";
import Header from "../src/components/Header";
import Banner from "../src/components/Banner";
import Statistics from "../src/components/Statistics";
import OurTeam from "../src/components/OurTeam";
import Testimonials from '../src/components/Testimonials';
import Footer from '../src/components/Footer';
import Features from "../src/components/Features";
import BackgroundVideo from '../src/components/BackgroundVideo';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Meraki Solar</title>

      </Head>

    
      <main className="max-w-screen-full mx-auto">
        <Header /><Banner />

<Testimonials />
         <Features />
       
        <OurTeam />
       <Statistics />
        <Footer />
    
      </main>
    </div>
  );
}
