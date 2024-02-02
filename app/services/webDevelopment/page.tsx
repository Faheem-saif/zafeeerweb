import ServicesBanner from "@/app/components/bannersSevices/ServicesBanner";
import ServicesText from "@/app/components/servicesText/ServicesText";
import OfferedServices from "@/app/components/sevicesOffered/OfferedServices";
import { serviceModel } from "@/models/ServicesOffered";
const fetchData = async () => {
  try {
    const result = await serviceModel.find({ category: 'webDevelopment' });
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
        <ServicesBanner mobile="https://firebasestorage.googleapis.com/v0/b/mobile--banner.appspot.com/o/Banner-1.jpg?alt=media&token=9ede893a-0475-4787-b920-971deedc3b8b" url={"https://res.cloudinary.com/dgox1rcsc/image/upload/v1705832038/Banners/kzolavsaas0pi1lom7kc.png"} />
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
