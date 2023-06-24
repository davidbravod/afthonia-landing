import Head from "next/head";
import Banner from '../components/Homepage/Banner/Banner'
import GrowTraffic from '../components/Homepage/GrowTraffic/GrowTraffic'
import Solution from '../components/Homepage/Solution/Solution'
import Service from '../components/Homepage/Service/Service'
import Workflow from "../components/Homepage/Workflow/Workflow";
import Clients from "../components/Homepage/Clients/Clients";
import Pricing from '../components/Homepage/Pricing/Pricing'
import Testimonial from "../components/Homepage/Testimonial/Testimonial";
import Blog from '../components/Homepage/Blog/Blog'
export default function Home() {
  return (
    <>
      <Head>
        <title>Afthonia - Business Formation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon-afthonia-white.ico" />
      </Head>
      <>
        <Banner />
        <Solution />
        <Pricing />
        <Clients />
        <Testimonial />
        {/* <Service />
        <GrowTraffic />
        <Workflow />
        <Blog /> */}
      </>
    </>
  );
}
