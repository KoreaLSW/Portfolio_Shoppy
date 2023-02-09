import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useCart from '../hooks/useCart';

export default function ProductDetail() {
    const { addorUpdateItem } = useCart();
    const {
        state: {
            product: {
                id,
                image,
                title,
                description,
                category,
                price,
                options,
                colors,
            },
        },
    } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [option, setOption] = useState(options && options[0]);
    const handleOption = (e) => setOption(e.target.value);

    const [color, setColor] = useState(colors && colors[0]);
    const handleColor = (e) => setColor(e.target.value);

    const handleBtn = () => {
        const product = {
            id,
            category,
            image,
            title,
            price,
            option,
            color,
            quantity: 1,
        };
        addorUpdateItem.mutate(product, {
            onSuccess: () => {
                alert('장바구니에 추가되었습니다!');
            },
        });
    };
    return (
        <div className='mt-24  md:mt-12'>
            <div className=' flex mx-10 pt-10 gap-12 lg:flex-col md:flex-col'>
                <div className=''>
                    <img className='h-full' src={image} alt='' />
                </div>
                <div className='p-5 bg-gray-100'>
                    <p className='text-gray-500'>{category}</p>
                    <p className='text-2xl font-semibold mt-2'>{title}</p>
                    <p className='text-xl font-semibold mt-2'>
                        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        원
                    </p>
                    <p className='mt-2 font-light text-lg border-b border-gray-400 pb-8'>
                        {description}
                    </p>
                    <div className='flex mt-8 justify-center items-center'>
                        <p className=''>옵션</p>
                        <select
                            className='p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none'
                            id='select'
                            onChange={handleOption}
                            value={option}
                        >
                            {options &&
                                options.map((option, index) => (
                                    <option key={index}>{option}</option>
                                ))}
                        </select>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p>색상</p>
                        <select
                            className='p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none'
                            id='select'
                            onChange={handleColor}
                            value={color}
                        >
                            {colors &&
                                colors.map((color, index) => (
                                    <option key={index}>{color}</option>
                                ))}
                        </select>
                    </div>
                    <div className='text-right mr-3'>
                        <button
                            className='bg-brand text-white py-3 px-4 rounded-md hover:brightness-110'
                            onClick={handleBtn}
                        >
                            장바구니 추가
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
