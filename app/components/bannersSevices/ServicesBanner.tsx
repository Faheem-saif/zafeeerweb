

export default function ServicesBanner(prop: { url: string, mobile: string }) {
  return (
    <>
      <img src={prop.url} className="hidden md:block" />
      <img src={prop.mobile} className=" w-full md:hidden" />
    </>
  )
}
