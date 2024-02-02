import ServicesBanner from "@/app/components/bannersSevices/ServicesBanner";
import ServicesText from "@/app/components/servicesText/ServicesText";
import OfferedServices from "@/app/components/sevicesOffered/OfferedServices";
import { serviceModel } from "@/models/ServicesOffered";
const fetchData = async () => {
  try {
    const result = await serviceModel.find({ category: 'videoEditing' });
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
        <ServicesBanner mobile="https://firebasestorage.googleapis.com/v0/b/mobile--banner.appspot.com/o/Banner-5.jpg?alt=media&token=5159c3dd-7219-466a-a125-bbcdd62c6442" url={"https://firebasestorage.googleapis.com/v0/b/myunipixel-beta.appspot.com/o/Video-editing%201.png?alt=media&token=edbfead0-278d-40e0-849e-c1f3058c86d7"} />
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
