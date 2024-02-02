import ServicesBanner from "@/app/components/bannersSevices/ServicesBanner";
import ServicesText from "@/app/components/servicesText/ServicesText";
import OfferedServices from "@/app/components/sevicesOffered/OfferedServices";
import { serviceModel } from "@/models/ServicesOffered";

const fetchData = async () => {
  try {
    const result = await serviceModel.find({ category: 'graphicDesigning' });
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }

};
export default async function page() {


  const services = await fetchData()


  return (
    <>
      <div>
        <ServicesBanner mobile="https://firebasestorage.googleapis.com/v0/b/mobile--banner.appspot.com/o/Banner-2.jpg?alt=media&token=e23b9c94-683b-44c7-b3ff-2b6171bdc657" url={"https://firebasestorage.googleapis.com/v0/b/myunipixel-beta.appspot.com/o/Graphic-banner%201.png?alt=media&token=7ba0d21c-aa73-408d-8c3c-327352710db8"} />
      </div>
      <div>
        <OfferedServices data={services} />
      </div>
      <div className="bg-[#F8F9FB]">
        <ServicesText />
      </div>
    </>
  )
}
