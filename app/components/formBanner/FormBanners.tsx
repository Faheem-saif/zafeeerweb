'use client'
import Aos from "aos";
import 'aos/dist/aos.css';
import Link from "next/link";
import { useEffect, useState } from "react"
import OurServicesForChange from "../ourServices copy/OurServices";



export default function FormBanners(prop: { url: string, heading: string }) {
    const [showOptions, setShowOptions] = useState(false)

    useEffect(() => {
        Aos.init(); // Add your AOS configuration here
    }, []);
    return (
        <>
            {
                !showOptions &&
                <div className="bg-[#F8F9FB] flex ">
                    <div className=" w-[50%] md:ps-[10%] ps-3 py-5 md:pt-[5%]">
                        <p className="font-bold text-[18px] md:text-5xl ">Hire</p>
                        <p className="font-bold text-[18px] md:text-5xl ">Myunipixel</p>
                        <p className="font-bold text-[18px] md:text-5xl">for {prop.heading}</p>
                    </div>
                    <div className=" md:ps-[17%] w-[50%] " ><img className=" " src={prop.url} /></div>
                </div>
            }
            {
                showOptions &&
                <>
                    <div className="hidden md:block">
                        <OurServicesForChange />
                    </div>
                    <div className=" mt-[3%] md:mt-[11%] md:hidden">
                        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3">
                            <Link href={"/taskDetails/graphicDesigning"}> <div className=" text-center border border-[#F8F9FB] h-full rounded-xl hover:bg-[#F8F9FB] items-center py-5  " data-aos="fade-down"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine">Graphic Designer</div></Link>
                            <Link href={"/taskDetails/webDevelopment"}>
                                <div className="py-5  text-center border border-[#F8F9FB] h-full rounded-xl hover:bg-[#F8F9FB] items-center"
                                    data-aos="fade-down"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine">Web Development</div>
                            </Link>
                            <Link href={"/taskDetails/contantWriting"}>
                                <div className="py-5  text-center border border-[#F8F9FB] h-full rounded-xl hover:bg-[#F8F9FB] items-center" data-aos="fade-down"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine">Content Writing </div>
                            </Link>
                            <Link href={"/taskDetails/videoEditing"}>
                                <div className="py-5  text-center border border-[#F8F9FB] h-full rounded-xl hover:bg-[#F8F9FB] items-center" data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine">Video Animation</div>
                            </Link>
                            <Link href={"/taskDetails/seo"}>
                                <div className="py-5  text-center border border-[#F8F9FB] h-full rounded-xl hover:bg-[#F8F9FB] items-center" data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine">SEO / marketing</div>
                            </Link>

                            <Link href={"/taskDetails/customTask"}>
                                <div className="py-5  text-center border border-[#F8F9FB] h-full rounded-xl hover:bg-[#F8F9FB] items-center" data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine">Cutom Task</div>
                            </Link>

                        </div>
                    </div>
                </>
            }
            <div className=" flex item-center justify-center w-full rounded bg-white px-1">
                <button className="py-2 w-full hover:bg-blue-600 hover:text-white rounded-lg" onClick={() => setShowOptions(!showOptions)}>Change service</button>
            </div>
        </>
    )
}
