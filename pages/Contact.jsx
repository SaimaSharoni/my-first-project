import React from 'react';

const Contact = () => {
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.721721834038!2d90.38710647484595!3d23.757300888512294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b98b56c2e311%3A0x8848956e9a59890f!2sBTI%20Central%20Plaza!5e0!3m2!1sen!2sbd!4v1717605447574!5m2!1sen!2sbd";
  return (
    <div className="container mx-auto py-8 pt-16 px-4">
      <div className="flex flex-wrap items-center justify-center m-2">
        {/* Left Column - Address */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 p-6">
          <div className="bg-orange-300 rounded-lg shadow-md p-6">
            <h2 className="text-blue-950 text-2xl font-bold mb-4">Contact Us</h2>
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <p className="text-blue-950">BTi Central Plaza, 6th Floor, 95 Green Road, Farmgate, Dhaka-1215, Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center mb-4">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2 text-blue-950">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
</svg>


              <p className="text-blue-950">englishscanneredu@gmail.com</p>
            </div>
            <div className="flex items-center mb-4">
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2 text-blue-950">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
              <p className="text-blue-950">+880 1950-096006</p>
            </div>
            <div className="flex items-center mb-4">
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2 text-blue-950">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
              <p className="text-blue-950">+880 1718-353539</p>
            
        </div>

        {/* Right Column - Google Maps */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              title="Google Maps Location"
              className="w-full h-64 md:h-96"
              loading="lazy"
              allowFullScreen
              src={googleMapsUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
