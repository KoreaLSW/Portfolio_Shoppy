import React, { useEffect, useState } from 'react';
import { parse } from 'uuid';
import useCart from '../hooks/useCart';

export default function CartPrice({ product }) {
    const {
        cartQuery: { isLoading, data: products },
        addorUpdateItem,
        removeItem,
    } = useCart();

    const totalPrice =
        products &&
        products.reduce(
            (prev, current) =>
                prev + parseInt(current.price) * current.quantity,
            0
        );
    return (
        <div className='w-1/3 ml-24 mr-10 px-10 py-5 mt-10 bg-gray-200 xl:w-full xl:mx-0  lg:w-full lg:mx-0 md:w-full md:mx-0'>
            <h2 className='text-3xl font-bold border-b border-b-gray-500 pb-5'>
                주문내역
            </h2>
            <ul className='mt-5 border-b border-b-gray-500 pb-5'>
                {products &&
                    products.map((value) => (
                        <li
                            key={value.id}
                            className='flex justify-between mb-2'
                        >
                            <p>{value.title}</p>
                            <p className='text-xl font-semibold '>
                                {(value.price * value.quantity)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                원
                            </p>
                        </li>
                    ))}
            </ul>
            <div className='mt-5 flex justify-between'>
                <p className='text-xl'>TOTAL</p>
                <p className='text-2xl font-semibold'>
                    {totalPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                </p>
            </div>
        </div>
    );
}
