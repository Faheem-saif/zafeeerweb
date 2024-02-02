'use client'
import React, { useEffect, useState } from 'react';
import ModalImage from 'react-modal-image';


interface Work {
    url: string;
    category: string;
}

const AllWorks: Work[] = [
    { url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", category: "website" },
    { url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", category: "website" },
    { url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", category: "graphic" },
    { url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", category: "website" },
    { url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", category: "website" },
    { url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", category: "website" },
    { url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", category: "UI" },
    { url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", category: "website" },
    { url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", category: "website" }
    , { url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", category: "website" },
    { url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", category: "website" },
    { url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", category: "website" },
];

const AmazingWork: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('website');
    const [selectedWorks, setSelectedWorks] = useState<Work[]>([]);
    const [lightboxIndex, setLightboxIndex] = useState<number>(0);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        const filteredWorks = AllWorks.filter((work) => category === work.category);
        setSelectedWorks(filteredWorks);
    };

    useEffect(() => {
        handleCategoryClick(selectedCategory);
    }, [selectedCategory]);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
    };

    return (
        <>
            <div className="flex">
                <div className="w-[25%]">
                    <div className='flex flex-col'>
                        {['website', 'graphic', 'UI'].map((category) => (
                            <button
                                key={category}
                                className={`text-xl hover:text-blue-500 hover:underline my-3 ${selectedCategory === category ? 'text-blue-500 underline' : ''}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="w-[70%] pe-7">
                    <div className="flex flex-wrap ">
                        {selectedWorks.map((work, index) => (
                            <div key={index} className="w-1/2 md:w-1/5 min-h-7">
                                <ModalImage
                                    showRotate={true}
                                    small={work.url}
                                    large={work.url}
                                    hideDownload={true}
                                    hideZoom={true}
                                    onClick={() => openLightbox(index)}
                                    className="rounded-2xl p-1"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AmazingWork;
