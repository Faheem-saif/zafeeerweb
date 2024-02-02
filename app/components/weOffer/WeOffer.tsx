import CardOffer from "./CardOffer";



export default function WeOffer() {
    return (
        <>
            <div className=" bg-[#F8F9FB] py-5 px-4 md:mx-[15%] ">
                <h1 className="text-center font-bold text-xl pb-4 underline">What we offer</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <CardOffer src="https://firebasestorage.googleapis.com/v0/b/myunipixel-beta.appspot.com/o/work_1.png?alt=media&token=3b857d0d-c6ec-4f3a-87ae-e3038b3ac9a8" heading="Every  Digital service" description="We cover all services. Whatever you ask, whether it’s design or development or any digital service. You’ll get the desired outcome." />
                    <CardOffer src="https://firebasestorage.googleapis.com/v0/b/unipixeldata.appspot.com/o/offers%2FGroup%20223.png?alt=media&token=e47f1999-f043-4e5d-92d6-52baab9480ac" heading="Your Choice: Monthly | Per Task" description="Pick your style: Monthly commitment or per-task flexibility. We're here to cater to your preferences!" />
                    <CardOffer src="https://firebasestorage.googleapis.com/v0/b/unipixeldata.appspot.com/o/offers%2FLayer_1%20(2).png?alt=media&token=4a9396d9-1ac7-4595-a76d-227d374fd18f" heading="Individual or Company" description="Whether you're an individual or a company, our services are designed to suit everyone's needs." />
                    <CardOffer src="https://firebasestorage.googleapis.com/v0/b/unipixeldata.appspot.com/o/offers%2FLayer_1.png?alt=media&token=3d34edb6-2ae9-403b-8f33-f411d2c5ed56" heading="Unlimited Revision" description="Enjoy peace of mind with our unlimited revision policy, ensuring your satisfaction as we work together to perfect your project." />
                    <CardOffer src="https://firebasestorage.googleapis.com/v0/b/unipixeldata.appspot.com/o/offers%2FLayer_1%20(1).png?alt=media&token=93895bb0-bd70-4853-8a02-5bb336c1ff3e" heading="Quality Assurance" description="Our quality assurance team always makes sure that everything gets done according to your provided instructions about the job." />
                    <CardOffer src="https://firebasestorage.googleapis.com/v0/b/unipixeldata.appspot.com/o/offers%2Fweb-design%201.png?alt=media&token=ce2fc69c-45bb-4c67-8315-5521e3152cd1" heading="Custom Task offer" description="Ask for anything! Our Custom Task Offer lets you request services not listed on our website, tailored just for you." />

                </div>
            </div>
        </>
    )
}            
