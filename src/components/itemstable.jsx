/* eslint-disable no-undef */

import React from 'react'
import { FaTrash } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';

export const Itemstable = ({ items, removeItem, increaCount}) => (
  <div className='PriceTable__conteiner'>

    {items.map(item => (
      <div className='PriceTable' key={item.id}>
      <div className='PriceTable__images'>
      <Image src={'./images/'+ item.img} alt="foto"/>
   
      </div>
        <div className='PriceTable__title'><h4>{item.title}</h4></div>
       
        <div className='PriceTable__pricevan'><b>{item.price}.грн</b></div>
        <div className='shopCounter'>
        <button className='minus'>-</button>
        <span className='count'>{item.amount}</span>
        <button onClick={()=>increaCount(item.id)} className='plus'>+</button>
        <div className='TotalPrice'>{item.price * item.amount}.грн</div>
        <FaTrash onClick={()=>removeItem(item.id)}  className='Dellete'/>
        </div>
      </div>
    ))}
  </div>
);

