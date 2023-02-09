import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import useCart from '../hooks/useCart';

const ICON_CLASS =
    'transition-all cursor-pointer hover:text-brand hover:scale105 mx-1';
export default function CartItem({ product, product: { quantity, price } }) {
    const { addorUpdateItem, removeItem } = useCart();
    const handleMinue = () => {
        if (product.quantity < 2) return;
        addorUpdateItem.mutate({ ...product, quantity: quantity - 1 });
    };
    const handlePlus = () => {
        addorUpdateItem.mutate({ ...product, quantity: quantity + 1 });
    };
    const handleDelete = () => {
        removeItem.mutate(product.id);
    };

    const totalPrice = price * quantity;

    return (
        <li className='flex justify-between items-center border-t border-gray-500 cursor-pointer mt-10 pt-10 ml-10 xl:mr-10 md:flex-col md:mx-5 md:items-center '>
            <img className='w-28 ' src={product.image} alt='' />
            <div className='mt-5 md:text-center'>
                <h2 className='font-bold text-xl '>{product.title}</h2>
                <p className='text-gray-500 '>{product.category}</p>
            </div>
            <p className='text-lg'>
                {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </p>
            <div className='text-2xl flex items-center md:flex-col'>
                <div className='flex items-center justify-center md:flex-row'>
                    <AiOutlineMinusSquare
                        className={ICON_CLASS}
                        onClick={handleMinue}
                    />
                    <span>{product.quantity}</span>
                    <AiOutlinePlusSquare
                        className={ICON_CLASS}
                        onClick={handlePlus}
                    />
                </div>
                <p className='mx-5'>
                    {totalPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                </p>

                <RiDeleteBin5Fill
                    className={ICON_CLASS}
                    onClick={handleDelete}
                />
            </div>
        </li>
    );
}
