import React from 'react';

const AboutCourse = () => {
  return (
    <div className="bg-orange-300 p-4 lg:p-10 rounded mx-4">
      <div className="flex flex-col lg:flex-row">
        {/* Text Section */}
        <div className="w-full lg:w-3/5 mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-4 px-4 lg:px-10 text-center lg:text-left">About the course</h2>
          <p className="text-base lg:text-lg text-blue-950 px-4 lg:px-10 text-center lg:text-left">
            An online course designed to enhance English competency among primary teachers focuses on improving spoken English,
            children's English, grammar, and phonetics. Delivered via Zoom, this innovative programme integrates syntax methods and
            the use of gestures to foster engaging and effective teaching strategies. Participants engage in interactive activities
            like role-playing and sentence construction exercises, enhancing both fluency and grammatical understanding. 
            Feedback from teachers highlights increased confidence and proficiency in English, impacting their teaching methods positively. 
            Challenges such as adapting to virtual teaching methods were met with iterative adjustments, enriching the learning experience. 
            This course exemplifies the critical role of targeted professional development in elevating educational standards and teacher performance in primary education.
          </p>
        </div>

        {/* Table Section */}
        <div className="w-full lg:w-2/5 px-4 lg:px-10 text-center py-4 lg:py-16">
          <div className="overflow-x-auto">
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th className="w-1/4 lg:w-1/3 px-2 lg:px-4 py-2">Course Duration</th>
                  <th className="w-1/4 lg:w-1/3 px-2 lg:px-4 py-2">No. of classes</th>
                  <th className="w-1/4 lg:w-1/3 px-2 lg:px-4 py-2">Class Duration</th>
                  <th className="w-1/4 lg:w-1/3 px-2 lg:px-4 py-2">No. of Exams</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 lg:px-4 py-2">2 months (8 weeks)</td>
                  <td className="border px-2 lg:px-4 py-2">22</td>
                  <td className="border px-2 lg:px-4 py-2">2 Hours (3 days a week)</td>
                  <td className="border px-2 lg:px-4 py-2">02</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
