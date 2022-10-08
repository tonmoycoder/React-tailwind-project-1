import React, { useState } from 'react';
import Link from '../Link/Link';
import './Navbar.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: 'Home', path: '/home' },
    { id: 2, name: 'Products', path: '/home' },
    { id: 3, name: 'Orders', path: '/home' },
    { id: 4, name: 'Contacts', path: '/home' },
    { id: 5, name: 'About', path: '/home' },
  ];
  return (
    <div>
      <nav>
        {open ? 
          <Bars3Icon onClick={() => setOpen(!open)} className="h-6 w-6 cursor-pointer"></Bars3Icon>
         : 
          <XMarkIcon onClick={() => setOpen(!open)} className="h-6 w-6 cursor-pointer"></XMarkIcon>
        }
        <ul className="md:flex justify-center">
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};


export default Navbar;
