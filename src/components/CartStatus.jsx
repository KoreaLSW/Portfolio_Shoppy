import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useCart from '../hooks/useCart';

export default function CartItem() {
    const {
        cartQuery: { data: products },
    } = useCart();

    return (
        <div className='flex items-center mr-5'>
            <AiOutlineShoppingCart className='text-white text-xl mr-2' />
            {products && (
                <p className='rounded-full bg-white w-5 h-5 text-brand text-center text-sm font-semibold'>
                    {products.length}
                </p>
            )}
        </div>
    );
}
