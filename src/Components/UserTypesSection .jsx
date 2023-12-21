import React from 'react';

const UserTypesSection = () => {
  const userTypes = [
    {
      title: 'Developers',
      description: 'Effortlessly manage project tasks and timelines for seamless development workflows.',
    },
    {
      title: 'Corporate Professionals',
      description: 'Stay organized and boost productivity in your daily tasks and project collaborations.',
    },
    {
      title: 'Bankers',
      description: 'Effectively manage financial tasks and deadlines with TaskifyHub’s intuitive features.',
    },
    // Add more user types as needed
  ];

  return (
    <section className=" py-20 px-36">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-white font-semibold mb-9">Who Can Benefit from TaskifyHub?</h2>

        <div className="flex flex-wrap justify-center">
          {userTypes.map((userType, index) => (
            <div key={index} className="max-w-md mx-4 mb-6 bg-slate-900 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{userType.title}</h3>
              <p className="text-white/90">{userType.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;
