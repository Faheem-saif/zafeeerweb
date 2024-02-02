'use client'
import React, { useState } from 'react';
import { Accordion, Button, FloatingLabel } from 'flowbite-react';

const FormDetail = (prop: { data: { questions: string[], minPrice: number } }) => {

    const [isProcessing, setIsProcessing] = useState(false)


    const formData = new FormData();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        formData.set(name, value);
    };

    const handleSubmit = async (e: any) => {
        setIsProcessing(true)

        e.preventDefault();

        formData.set("access_key", "76dca32c-c539-41c4-bcc9-6ab313373be1");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }

        setIsProcessing(false);
    }

    return (
        <>
            {/* Accordion section */}
            <div className='p-4'>
                <p className='font-bold p-3'>You must have to Answer these Questions</p>
                <Accordion>
                    {
                        prop.data.questions.map((data, i) => (
                            <Accordion.Panel key={i}>
                                <Accordion.Title>{data}</Accordion.Title>
                                <Accordion.Content>
                                    {/* FloatingLabel inside Accordion Content */}
                                    <FloatingLabel
                                        variant="outlined"
                                        name={`questionNo${i + 1}:${data.replace(/\s+/g, '-').toLowerCase()}`}
                                        onChange={handleChange}
                                        label="Write the answer here"
                                        required={true}
                                    />
                                </Accordion.Content>
                            </Accordion.Panel>
                        ))
                    }
                </Accordion>
            </div>

            {/* Textarea section */}
            <div className="p-4">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Describe your task in more detail
                </label>
                {/* Textarea for user input */}
                <textarea
                    id="message"
                    rows={4}
                    onChange={handleChange}
                    className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your text here..."
                    name='detailOfProject'
                    required={true}
                ></textarea>
            </div>

            {/* Form with number inputs section */}
            <div className="p-5 flex ">
                {/* First number input */}
                <div className='w-[60%]'>
                    <label htmlFor="number-input-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your Estimated Budget
                    </label>
                    <input
                        type="number"
                        id="number-input-1"
                        aria-describedby="helper-text-explanation-1"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[84%] md:w-[45%] p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={prop.data.minPrice.toString()}
                        onChange={handleChange}
                        name='budget'
                        required
                        min={prop.data.minPrice}
                    />
                </div>

                {/* Second number input */}
                <div className='ms-[25%]'>
                    <label htmlFor="number-input-2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Project Days
                    </label>
                    <input
                        onChange={handleChange}
                        type="number"
                        name='days'
                        id="number-input-2"
                        aria-describedby="helper-text-explanation-2"
                        className="border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Days"
                        required
                        min={0}
                    />
                </div>
            </div>

            {/* Additional FloatingLabel inputs */}
            <div className='p-4'>
                <p className='font-bold p-2'>Add your email to send project details to us:</p>
                <FloatingLabel
                    variant="outlined"
                    name='name'
                    onChange={handleChange}
                    label="Type your Name"
                />
                <FloatingLabel
                    variant="outlined"
                    name='email'
                    type='email'
                    onChange={handleChange}
                    label="Type your E-mail"
                />
            </div>

            {/* Submit Button section */}
            <div className='p-4'>
                <Button className='w-full p-4 h-8' color='blue' isProcessing={isProcessing} onClick={handleSubmit} onSubmit={handleSubmit}>
                    Send it to Us
                </Button>
            </div>
        </>
    );
};

export default FormDetail;
