import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';


const PhoneBar = () => {
    const [phones,setPhones] = useState([])
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesLoaded = data.data.data;
            const phoneData =phonesLoaded.map(phone => {
                const parts = phone.slug.split('-')
                const price = parseInt(parts[1])
                const singlePhone ={
                    name : phone.phone_name,
                    price : price
                }
                return singlePhone
            })
            console.log(phoneData);
            setPhones(phoneData)
        })
    },[])
    return (
        <div className='flex justify-center'>
            <BarChart width={800} height={400} data={phones}>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default PhoneBar;