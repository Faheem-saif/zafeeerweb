

interface CardOfferProps {
    src: string;
    heading: string;
    description: string;
    animation?: string;
}

const CardOffer: React.FC<CardOfferProps> = ({ src, heading, description,animation }) => {
    return (
        <>
            <div className="p-4 bg-white shadow-md mx-10 md:mx-auto">
                <div className="flex justify-between">
                    <div className="me-6 ">
                        <img src={src} alt={heading+description} width={60}  />
                    </div>
                    <div>
                        <h2 className="font-bold text-[21px]">{heading}</h2>
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </>
    );
}

export default CardOffer;




