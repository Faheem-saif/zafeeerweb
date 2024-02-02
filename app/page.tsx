
import HeroHomePage from "./components/hero/HeroHomePgae";
import OurServices from "./components/ourServices/OurServices";
import ShortIntro from "./components/shortIntro/ShortIntro";
import Processes from "./components/process/Processes";
import WeOffer from "./components/weOffer/WeOffer";
import Testimonial from "./components/testimonial/Testimonial";
import Badge from "./components/badges/Badge";
import HomePageHeading from "./components/formBanner/homePageHeading/HomePageHeading";

export default function Home() {

  return (
    <>
    

      <div className="mt-7 bg-white">
        <HomePageHeading />
      </div>
      <div className="flex justify-center">
        <button className="bg-[#0094FF] px-5 py-2 rounded-3xl mb-6 text-white">Book a Pro </button>
      </div>
      <div>
        <HeroHomePage />
      </div>
      <div className="bg-[#F8F9FB] px-4 py-5">
        <OurServices />
      </div>
      <div className=" bg-[#F8F9FB]  py-5 mb-3">
        <Badge />
      </div>
      <div className="px-4">
        <ShortIntro />
      </div>
      <div className="bg-[#F8F9FB] px-4 py-5">
        <h1 className="font-bold text-xl my-4 text-center">4 Steps Process</h1>
        <Processes />
      </div>
      <div className="h-7 "></div>
      <div className="bg-[#F8F9FB] px-4 py-5">
        <WeOffer />
      </div>
      <div>
        <Testimonial />
      </div>
    </>
  );
}
