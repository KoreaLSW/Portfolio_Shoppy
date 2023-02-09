import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { addOrUpdateToCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import useCart from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

export default function ProductItem({ product }) {
    const { uid } = useAuthContext();
    const [heart, setHeart] = useState(false);

    const {
        cartQuery: { data: products },
        addorUpdateItem,
        removeItem,
    } = useCart();

    useEffect(() => {
        if (product && products) {
            products.map((value) => {
                value.id === product.id && setHeart(true);
            });
        }
    }, [products]);

    const handleCart = () => {
        const productItem = {
            ...product,
            quantity: 1,
        };

        if (heart) {
            setHeart(false);
            removeItem.mutate(productItem.id);
        } else {
            addorUpdateItem.mutate(productItem);
            setHeart(true);
        }
    };

    const navigate = useNavigate();

    return (
        <li className='mt-3'>
            <div className='mb-2 flex justify-end'>
                {!heart ? (
                    <AiOutlineHeart
                        className='text-2xl cursor-pointer'
                        onClick={handleCart}
                    />
                ) : (
                    <AiFillHeart
                        className='text-2xl cursor-pointer text-red-500'
                        onClick={handleCart}
                    />
                )}
            </div>
            <div
                className='h-full cursor-pointer '
                onClick={() => {
                    navigate(`/shop/ProductDetail/${product.id}}`, {
                        state: { product },
                    });
                }}
            >
                <div className='h-3/4 overflow-hidden'>
                    <img
                        className='w-full h-full object-cover ease-in duration-300 hover:scale-105'
                        src={product.image}
                        alt=''
                    />
                </div>
                <div className='mt-2'>
                    <p className='text-gray-400 text-sm'>{product.category}</p>
                    <p className='font-semibold text-xl'>{product.title}</p>
                    <p className='font-normal'>
                        {product.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        원
                    </p>
                </div>
            </div>
        </li>
    );
}
