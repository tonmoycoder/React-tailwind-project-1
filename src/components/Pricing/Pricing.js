import React from 'react';
import PriceOptions from '../PriceOptions/PriceOptions';

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: 'Free',
      price: 0,
      features: [
        'Awesome Feature',
        'Extra Feature',
        'Unnecessary Feature',
        'Will never use Feature',
        'Hudai feature',
        'Ajaira Feature',
      ],
    },
    {
      id: 2,
      name: 'Medium',
      price: 99.99,
      features: [
        'Everything on Free',
        'Extra Feature',
        'Unnecessary Feature',
        'Will never use Feature',
        'Hudai feature',
        'Ajaira Feature',
      ],
    },
    {
      id: 3,
      name: 'Premium',
      price: 199.99,
      features: [
        'Everything on Premium',
        'Extra Feature',
        'Unnecessary Feature',
        'Will never use Feature',
        'Hudai feature',
        'Ajaira Feature',
      ],
    },
  ];
  return (
    <div className='text-center'>
      <h2 className="text-8xl text-center text-white bg-indigo-300 font-bold p-12">
        Best Deal of the Town
      </h2>
      <div className='grid md:grid-cols-3 gap-4'>
      {pricingOptions.map((option) => (
        <PriceOptions
        key={option.id}
        option={option}
        ></PriceOptions>
      ))}
      </div>
    </div>
  );
};

export default Pricing;
