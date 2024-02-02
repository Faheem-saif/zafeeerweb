import ServicesBanner from "@/app/components/bannersSevices/ServicesBanner";
import ServicesText from "@/app/components/servicesText/ServicesText";
import OfferedServices from "@/app/components/sevicesOffered/OfferedServices";
import { serviceModel } from "@/models/ServicesOffered";

const fetchData = async () => {
  try {
    const result = await serviceModel.find({ category: 'contantWriting' });
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
        <ServicesBanner mobile="https://firebasestorage.googleapis.com/v0/b/mobile--banner.appspot.com/o/Banner-4.jpg?alt=media&token=5a37dc7e-c810-4450-87b5-0260c4705125" url={"https://firebasestorage.googleapis.com/v0/b/myunipixel-beta.appspot.com/o/content-writer%201.png?alt=media&token=f372ad0e-ab32-4c63-9af4-3dc13277530a"} />
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
