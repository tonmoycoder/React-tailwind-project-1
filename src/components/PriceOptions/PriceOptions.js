import React from 'react';
import Feature from '../Feature/Feature';

const PriceOptions = ({ option }) => {
  const { features } = option;
  return (
    <div className="bg-indigo-300 m-3 rounded-md p-6 text-center ">
      <div className="mb-2">
        <h3>
          <span className="text-6xl font-bold text-white">{option.price}</span>
          <span className="text-2xl text-gray-200">/month</span>
        </h3>
        <p className="text-xl text-white p-6">{option.name}</p>
      </div>
      <div>
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}{' '}
      </div>
      <button
        type="button"
        className='w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-16 py-3 mr-2 mb-2 mt-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
        Buy Now
      </button>
    </div>
  );
};

export default PriceOptions;
