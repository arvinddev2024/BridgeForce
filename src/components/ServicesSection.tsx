'use client';

const ServicesSection = () => {
  const services = [
    {
      title: 'House Plumbing',
      description:
        'This is text element. Double click this element to edit text. You can change size, position and all other parameters including background, border, and many more.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10.5V3.75A1.5 1.5 0 014.5 2.25h15A1.5 1.5 0 0121 3.75v6.75"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12v5.25a1.5 1.5 0 001.5 1.5h7.5a1.5 1.5 0 001.5-1.5V12M12 14.25v3.75M8.25 12.75h7.5"
          />
        </svg>
      ),
    },
    {
      title: 'Company Plumbing',
      description:
        'This is text element. Double click this element to edit text. You can change size, position and all other parameters including background, border, and many more.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 text-green-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 10.5h9M10.5 13.5h3M7.5 16.5h9M5.25 3.75h13.5a.75.75 0 01.75.75v16.5a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V4.5a.75.75 0 01.75-.75z"
          />
        </svg>
      ),
    },
    {
      title: 'Service and Repair',
      description:
        'This is text element. Double click this element to edit text. You can change size, position and all other parameters including background, border, and many more.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3.75v16.5M3.75 12h16.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Our <span className="text-blue-500">Services</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-md">
                {service.icon}
              </div>
              <h3 className="mt-8 text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
