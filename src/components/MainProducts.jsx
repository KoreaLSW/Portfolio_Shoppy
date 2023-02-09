import React, { useState } from 'react';
import ProductItem from './ProductItem';
import useProducts from '../hooks/useProducts';
import { Link } from 'react-router-dom';

const TEXT_STYLE =
    'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold 2xl:text-4xl lg:text-3xl md:text-base';
const LIST_BG = 'w-full h-full bg-brand absolute top-0 opacity-40 ';
export default function MainProducts() {
    const [productType, setProdutType] = useState('All');
    const [link, setLink] = useState('/shop/ProductAll');
    // const {
    //     isLoading,
    //     error,
    //     data: products,
    // } = useQuery(['produts'], () => getProducts(productType));

    const {
        productsQuery: { data: products },
    } = useProducts(productType);

    const handleAllClick = (e) => {
        setProdutType('All');
        setLink('/shop/ProductAll');
    };
    const handleManClick = (e) => {
        setProdutType('Man');
        setLink('/shop/ProductMan');
    };
    const handleWomanClick = (e) => {
        setProdutType('Woman');
        setLink('/shop/ProductWomen');
    };
    const handleAccessoryClick = (e) => {
        setProdutType('Accessory');
        setLink('/shop/ProductAccessories');
    };

    return (
        <div className='px-5 mt-5 mb-72'>
            <ul className='grid grid-cols-4 gap-2'>
                <li
                    className='relative cursor-pointer overflow-hidden'
                    id='All'
                    onClick={handleAllClick}
                >
                    <div className={LIST_BG}></div>
                    <p className={TEXT_STYLE}>ALL</p>
                    <img
                        className='w-full '
                        src='https://res.cloudinary.com/dsopqs4i6/image/upload/w_400,ar_1:1,c_fill/v1675003706/all_image_s4adoq.jpg'
                        alt=''
                    />
                </li>
                <li
                    className='relative cursor-pointer'
                    id={'Man'}
                    onClick={handleManClick}
                >
                    <div className={LIST_BG}></div>
                    <p className={TEXT_STYLE}>MAN</p>
                    <img
                        className='w-full'
                        src='https://res.cloudinary.com/dsopqs4i6/image/upload/w_400,ar_1:1,c_fill/v1675003705/man_image_p0tq7y.jpg'
                        alt=''
                    />
                </li>
                <li
                    className='relative cursor-pointer'
                    id={'WoMan'}
                    onClick={handleWomanClick}
                >
                    <div className={LIST_BG}></div>
                    <p className={TEXT_STYLE}>WOMAN</p>
                    <img
                        className='w-full'
                        src='https://res.cloudinary.com/dsopqs4i6/image/upload/w_400,ar_1:1,c_fill/v1675003705/woman_image_xa8eaa.png'
                        alt=''
                    />
                </li>
                <li
                    className='relative cursor-pointer'
                    id={'Accessory'}
                    onClick={handleAccessoryClick}
                >
                    <div className={LIST_BG}></div>
                    <p className={TEXT_STYLE}>ACCESSORY</p>
                    <img
                        className='w-full c'
                        src='https://res.cloudinary.com/dsopqs4i6/image/upload/w_400,ar_1:1,c_fill/v1675003705/accessory_image_r6ktm9.jpg'
                        alt=''
                    />
                </li>
            </ul>

            <h1 className='text-center mt-10 text-4xl font-semibold'>
                추천 신상제품
            </h1>

            <ul className='grid grid-cols-5 gap-5 mt-5 px-48 2xl:grid-cols-4 xl:grid-cols-3 xl:px-24 lg:grid-cols-2 lg:px-2 md:grid-cols-1 md:px-2'>
                {products &&
                    products.map(
                        (value, index) =>
                            index < 10 && (
                                <ProductItem key={value.id} product={value} />
                            )
                    )}
            </ul>
            <div className='text-center mt-5'>
                <Link
                    to={link}
                    className='bg-brand text-white px-16 py-4 rounded-md text-xl'
                >
                    더보기
                </Link>
            </div>
        </div>
    );
}
