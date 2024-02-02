import Link from "next/link";



export default function OfferedServices(prop: { data: { heading: string, url: string, threePoints: string[], price: number, category: string }[] }) {
  return (
    <>
      <div className="mx-[13%] py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {
            prop.data.map((data, i) => (
              <div key={i} className="rounded-2xl px-3 py-3 border border-[#E2E2E2] flex flex-col">
                <div className="w- md:w-auto">
                  <img
                    src={data.url}
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h1 className="font-bold text-xl">{data.heading}</h1>
                    <ul className="list-decimal pl-6 flex text-[13px]">
                      <div>
                        {data.threePoints.slice(0, 3).map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </div>
                      <div className="ps-4">
                        {data.threePoints.slice(3, 6).map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </div>
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <Link href={`/taskDetails/${data.category}`}>
                      <button className="w-full px-2 py-2 rounded-lg border bg-blue-600 text-white  border-[#389FFF] md:hover:bg-blue-600 mt-3 md:bg-inherit md:text-black hover:text-white">${data.price}</button>
                    </Link>
                  </div>
                </div>

              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
