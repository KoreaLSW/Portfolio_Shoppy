import React, { useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import useProducts from '../hooks/useProducts';

const PAGECOUNT = 10;
export default function ProductAccessories() {
    const {
        productsQuery: { isLoading, error, refetch, data: products },
    } = useProducts('Accessory');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handelbutton = () => {};
    return (
        <div className='mt-24 md:mt-12'>
            <h1 className='text-4xl pt-10 text-center'>악세서리</h1>

            <ul className='grid grid-cols-5 gap-5 mt-5 px-48 2xl:grid-cols-4 xl:grid-cols-3 xl:px-24 lg:grid-cols-2 lg:px-2 md:grid-cols-1 md:px-2'>
                {products &&
                    products.map((value, index) => (
                        // index < PAGECOUNT && (
                        //     <ProductItem key={value.id} product={value} />
                        // )
                        <ProductItem key={value.id} product={value} />
                    ))}
            </ul>
            {/* <div className='text-center mt-5' onClick={handelbutton}>
                <button className='bg-brand text-white px-16 py-4 rounded-md text-xl'>
                    더보기
                </button>
            </div> */}
        </div>
    );
}
