import React from 'react';

const Link = ({ route }) => {
  return (
    <li className='text-xl mr-5'>
      <a href={route.path}>{route.name}</a>{' '}
    </li>
  );
};

export default Link;
