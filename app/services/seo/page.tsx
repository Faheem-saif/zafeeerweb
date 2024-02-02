import ServicesBanner from "@/app/components/bannersSevices/ServicesBanner";
import ServicesText from "@/app/components/servicesText/ServicesText";
import OfferedServices from "@/app/components/sevicesOffered/OfferedServices";
import { serviceModel } from "@/models/ServicesOffered";
const fetchData = async () => {
  try {
    const result = await serviceModel.find({ category: 'seo' });
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
        <ServicesBanner mobile="https://firebasestorage.googleapis.com/v0/b/mobile--banner.appspot.com/o/Banner-3.jpg?alt=media&token=e99f8dfd-4331-4fc6-ae0d-ace8b4148335" url={"https://firebasestorage.googleapis.com/v0/b/myunipixel-beta.appspot.com/o/SEO-and-digital-marketing%201.png?alt=media&token=3143b249-8a3c-417a-a4df-aa2085b3d2ad"} />
      </div>
      <div>
      <OfferedServices data={services} />
      </div>
      <div className="bg-[#F8F9FB]">
      <ServicesText/>
      </div>
    </>
  )
}
