
import FormDetail from "@/app/components/form/FormDetail";
import FormBanners from "@/app/components/formBanner/FormBanners";
import { detailsModel } from "@/models/DetailsData";


const fetchData = async (pageName: string) => {
  try {
    const result = await detailsModel.findOne({ category: pageName });
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function page({ params }: { params: { taskPageid: string } }) {

  const details = await fetchData(params.taskPageid)
  let detailsOfForms = {
    questions: details.questions,
    minPrice: details.minPrice
  }


  return (
    <>
      <div>
        <div className="bg-[#F8F9FB] text-center font-bold text-3xl py-4 mt-5">Task Details</div>
        <div className="">
          <FormBanners url={details.url} heading={details.heading} />
        </div>
        <div>
          <div className="md:w-[50vw] md:ms-[10%]"><FormDetail data={detailsOfForms} /></div>
          <div> blogs</div>
        </div>
      </div>

    </>
  )
}
