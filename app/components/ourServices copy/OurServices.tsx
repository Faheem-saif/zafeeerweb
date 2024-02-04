import Link from "next/link";
import CardService from "./CardService";


export default function OurServicesForChange() {
    return (
        <>
            <div className=" bg-[#F8F9FB] py-5 px-4 ">
                <h1 className="text-center font-bold text-xl pb-4 underline justify-items-center">What we offer</h1>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
                    <Link href={"/services/graphicDesign"}> <CardService animation="fade-down" src="https://firebasestorage.googleapis.com/v0/b/myunipixel-beta.appspot.com/o/image%206.png?alt=media&token=48512c1a-41d7-48a1-b920-4729e5b4fd6a" heading="Graphic Design" /></Link>
                    <Link href={"/services/webDevelopment"}> <CardService animation="fade-down" src="https://firebasestorage.googleapis.com/v0/b/unipixeldata.appspot.com/o/image%202.png?alt=media&token=3f098c72-202e-4e03-86d6-1e5feae99465" heading="Full-Stack Development" /></Link>
                    <Link href={"/services/contantWriting"}>
                        <CardService animation="fade-down" src="https://firebasestorage.googleapis.com/v0/b/unipixeldata.appspot.com/o/image%208.png?alt=media&token=b0510947-84ad-40ce-aa62-05b90b701987" heading="Content writing" /></Link>
                    <Link href={"/services/seo"}>                    <CardService animation="fade-down" src="https://firebasestorage.googleapis.com/v0/b/unipixeldata.appspot.com/o/image%2016.png?alt=media&token=eb34ee31-fa36-4f88-9d05-d017bfa5abe4" heading="Digital Marketing" /></Link>

                    <div className="md:hidden grid  md:grid-cols-subgrid md:gap-4 md:col-span-3">
                        <div className="md:col-start-2">
                            <Link href={"/services/videoEditing"}> <CardService animation="fade-up" src="https://firebasestorage.googleapis.com/v0/b/unipixeldata.appspot.com/o/image%2010.png?alt=media&token=a751d87e-0259-41f8-b3cd-37aa38b45907" heading="Video Editing" /></Link>
                        </div>
                    </div>
                    <div className="md:hidden grid md:grid-cols-subgrid md:gap-4 md:col-span-3">
                        <div className="">
                            <Link href={"/taskDetails/customTask"}>
                                <CardService animation="fade-up" src="https://firebasestorage.googleapis.com/v0/b/unipixeldata.appspot.com/o/image%209.png?alt=media&token=dc74828a-82a5-4e3e-b7d4-a1a5d5721fbc" heading="Custom Task" /></Link>
                        </div>
                    </div>
                    <div className="md:grid hidden  md:grid-cols-subgrid md:gap-4 md:col-span-3">
                        <div className="md:col-start-2">
                            <Link href={"/services/videoEditing"}> <CardService animation="fade-up" src="https://firebasestorage.googleapis.com/v0/b/unipixeldata.appspot.com/o/image%2010.png?alt=media&token=a751d87e-0259-41f8-b3cd-37aa38b45907" heading=" Video Editing" /></Link>
                        </div>
                        {/* </div>
                    <div className="md:grid md:grid-cols-subgrid md:gap-4 md:col-span-3"> */}
                        <div>
                            <Link href={"/taskDetails/customTask"}  >
                                <CardService animation="fade-up" src="https://firebasestorage.googleapis.com/v0/b/unipixeldata.appspot.com/o/image%209.png?alt=media&token=dc74828a-82a5-4e3e-b7d4-a1a5d5721fbc" heading="Custom Task" /></Link>
                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}
