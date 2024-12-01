'use client';

const HeroSection = () => {
  return (
    <section className="relative bg-blue-50 overflow-hidden ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-0">
        {/* Image Section */}
        <div className="relative z-10 lg:w-1/2">
          <img
            src="/s_plumber.webp" // Replace with your actual image path
            alt="Plumber"
            className="w-[60%] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0">
          <h1 className="text-4xl lg:text-5xl font-medium text-gray-800 leading-snug">
            Trusted <span className="text-blue-500">Plumbing</span> <br />
            and <span className="text-blue-500">Repair</span> Services
          </h1>
          <p className="mt-4 text-gray-600">
            This is text element. Double click this element to edit text. You
            can change size, position and all other parameters including
            background, border, and many more.
          </p>

          {/* Stats Section */}
          <div className="mt-8 flex justify-center lg:justify-start space-x-6">
            <div className="bg-white rounded-lg shadow-lg px-6 py-4">
              <h2 className="text-3xl font-bold text-gray-800">4600</h2>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-6 py-4">
              <h2 className="text-3xl font-bold text-gray-800">15+</h2>
              <p className="text-gray-600">Years of work</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-6 py-4">
              <h2 className="text-3xl font-bold text-gray-800">889</h2>
              <p className="text-gray-600">Total Projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Shape */}
      <div className="absolute inset-0 bg-blue-50 transform skew-y-6 -z-10"></div>
    </section>
  );
};

export default HeroSection;
