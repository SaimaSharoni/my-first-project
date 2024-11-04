// src/pages/AboutUs.jsx
import React from 'react';
import BackButton from '../components/BackButton';



const AboutUs = () => {
  return (
    <div className='md:p-12 lg:p-6 '>
      <div className='flex items-center pt-16'>
           <BackButton/>
     <div className="flex-grow">
         <h1 className="text-3xl text-center font-bold mb-4">About Us</h1>
    </div>
</div>
      <div className='mt-4 md:mt-8 lg:mt-10 text-base md:text-lg lg:text-xl'>
        
        <p className='mt-4'>What sets the English Scanner apart from others is our exceptional team of educators. We have Harvard-graduated teachers and professionals who have studied in the USA, bringing a wealth of knowledge and expertise to our institution.</p>
        <p className='mt-4'>Our team also includes highly qualified software engineers with 17 years of experience. ! ! !</p>
        <p className='mt-4'>This unique combination of academic excellence and real-world experience ensures that our students receive the highest quality education.</p>
        <p className='mt-4'>Our teachers are not only experts in their fields but also passionate about helping students achieve their goals.</p>
        <p className='mt-4'>With a focus on innovative teaching methods and personalised attention, we provide a learning environment that is both challenging and supportive.</p>
        <p className='mt-4'>Join English Scanner and experience the difference that our distinguished faculty can make in your educational journey.</p>
        <p className='mt-4'>Location: English Scanner.</p>
      </div>
    </div>
  );
};

export default AboutUs;
