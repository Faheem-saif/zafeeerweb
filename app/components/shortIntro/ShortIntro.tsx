import SidePicures from "./SidePicures";
const text: string = "Myunipixel – your all-in-one solution for digital excellence! As your dedicated partner, we offer a comprehensive range of services, from graphic and UI/UX design to web development, SEO, digital marketing, and captivating video editing and animation. Whether you're an individual or a company, we're your one-stop destination for all your digital needs. Our experienced team is committed to elevating your brand and ensuring success in the digital landscape. With Myunipixel, innovation meets excellence for a seamless and impactful digital journey."
export default function ShortIntro() {
    return (
        <>
                <h1 className="font-bold text-center text-xl pt-3">Our Short Intro</h1>
            <div className=" md:flex md:justify-between p-5 md:p-10">
                <div className="hidden md:block md:w-[45%] md:p-10  ">
                    <p className="">{text}</p>
                </div>
                <div className="md:w-1/2"> <SidePicures /> </div>
                <div className=" block md:hidden   ">
                    <p className="">{text}</p>
                </div>
            </div>
        </>
    )
}
