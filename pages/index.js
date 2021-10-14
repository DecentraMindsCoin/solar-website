import Head from "next/head";
import Header from "../src/components/Header";
import Banner from "../src/components/Banner";
import Powering from "../src/components/Powering";
import OurTeam from "../src/components/OurTeam";
import Testimonials from "../src/components/Testimonials";
import Footer from "../src/components/Footer";
import Features from "../src/components/Features";
import Cards from "../src/components/Cards";
import ImagesCarousel from "../src/components/ImagesCarousel";
import What from "../src/components/What";
import Why from "../src/components/Why";
import Question from "../src/components/Question";
import Who from "../src/components/Who";
import When from "../src/components/When";
import Where from "../src/components/Where";
import PanelsAbout from "../src/components/PanelsAbout";
import BuyNow from "../src/components/BuyNow";
import { useScrollIndicator } from "react-use-scroll-indicator";
import { useForm } from "react-hook-form";


export default function Home() {
  const [state] = useScrollIndicator();
  const { register, handleSubmit, errors, reset } = useForm();
  return (
    <main className="w-full" id="container">
      <Head>
        <title>Meraki Solar Rio Rancho</title>
      </Head>
      <section id="child">
        {" "}
        <Banner />
      </section>{" "}
      <Header />
      <section id="child">
        {" "}
        <Powering />{" "}
      </section>
      <section id="child">
        {" "}
        <Who />
      </section>
      <section id="child">
        {" "}
        <When />
      </section>
      <section id="child">
        {" "}
        <Where />
      </section>
      <section id="child">
        <What />
      </section>
      <section id="child">
        {" "}
        <PanelsAbout />
      </section>
      <section id="child">
        {" "}
        <Why />
      </section>
      <section id="child">
        {" "}
        <Question />
      </section>
      {/* <Cards /> <ImagesCarousel />
      <Testimonials />
      <Features />
      <OurTeam /> */}
      <section id="child">
        <BuyNow />
      </section>
      <Footer />
    </main>
  );
}
