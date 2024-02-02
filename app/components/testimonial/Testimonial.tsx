'use client'
import React from 'react';
import { Avatar, Blockquote, Rating, RatingStar } from 'flowbite-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

export default function Testimonial() {
  return (
    <>
    <h1 className='text-3xl font-bold text-center bg-[#F8F9FB] pb-5 pt-5 '>Testimonials</h1>
<div>
<Swiper className='bg-[#F8F9FB] mySwiper'
        direction={'vertical'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
    
        }}
        modules={[Pagination,Autoplay]}
        // className="mySwiper"
      >
        <SwiperSlide className='py-3'>   <figure className="max-w-screen-md">
      <div className="mb-4 flex items-center">
      <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at unipixel</cite>
      </div>
      <Blockquote>
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sunt eius consequatur vero debitis, commodi delectus cumque similique fuga voluptate soluta ipsum saepe iure sequi totam facere reprehenderit illo numquam! "
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center space-x-3">
        <Avatar rounded size="xs" img="/images/people/profile-picture-3.jpg" alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
          <Rating size="md">
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
        </Rating>
          
        </div>
      </figcaption>
    </figure></SwiperSlide>
        <SwiperSlide>   <figure className="max-w-screen-md">
      <div className="mb-4 flex items-center">
        <Rating size="md">
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
        </Rating>
      </div>
      <Blockquote>
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sunt eius consequatur vero debitis, commodi delectus cumque similique fuga voluptate soluta ipsum saepe iure sequi totam facere reprehenderit illo numquam! "
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center space-x-3">
        <Avatar rounded size="xs" img="/images/people/profile-picture-3.jpg" alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at unipixel</cite>
        </div>
      </figcaption>
    </figure></SwiperSlide>
        <SwiperSlide>   <figure className="max-w-screen-md">
      <div className="mb-4 flex items-center">
        <Rating size="md">
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
        </Rating>
      </div>
      <Blockquote>
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sunt eius consequatur vero debitis, commodi delectus cumque similique fuga voluptate soluta ipsum saepe iure sequi totam facere reprehenderit illo numquam! "
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center space-x-3">
        <Avatar rounded size="xs" img="/images/people/profile-picture-3.jpg" alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at unipixel</cite>
        </div>
      </figcaption>
    </figure></SwiperSlide>
        <SwiperSlide>   <figure className="max-w-screen-md">
      <div className="mb-4 flex items-center">
        <Rating size="md">
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
        </Rating>
      </div>
      <Blockquote>
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sunt eius consequatur vero debitis, commodi delectus cumque similique fuga voluptate soluta ipsum saepe iure sequi totam facere reprehenderit illo numquam! "
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center space-x-3">
        <Avatar rounded size="xs" img="/images/people/profile-picture-3.jpg" alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at unipixel</cite>
        </div>
      </figcaption>
    </figure></SwiperSlide>
        <SwiperSlide>   <figure className="max-w-screen-md">
      <div className="mb-4 flex items-center">
        <Rating size="md">
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
        </Rating>
      </div>
      <Blockquote>
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sunt eius consequatur vero debitis, commodi delectus cumque similique fuga voluptate soluta ipsum saepe iure sequi totam facere reprehenderit illo numquam! "
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center space-x-3">
        <Avatar rounded size="xs" img="/images/people/profile-picture-3.jpg" alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at unipixel</cite>
        </div>
      </figcaption>
    </figure></SwiperSlide>
        <SwiperSlide>   <figure className="max-w-screen-md">
      <div className="mb-4 flex items-center">
        <Rating size="md">
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
        </Rating>
      </div>
      <Blockquote>
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sunt eius consequatur vero debitis, commodi delectus cumque similique fuga voluptate soluta ipsum saepe iure sequi totam facere reprehenderit illo numquam! "
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center space-x-3">
        <Avatar rounded size="xs" img='' alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at unipixel</cite>
        </div>
      </figcaption>
    </figure></SwiperSlide>
   
      </Swiper>
</div>
    </>
  );
}
