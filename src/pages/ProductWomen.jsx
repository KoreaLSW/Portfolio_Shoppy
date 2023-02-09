import React, { useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import useProducts from '../hooks/useProducts';

export default function ProductWomen() {
    const {
        productsQuery: { isLoading, error, refetch, data: products },
    } = useProducts('Woman');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='mt-24 md:mt-12'>
            <h1 className='text-4xl pt-10 text-center'>여성옷</h1>
            <ul className='grid grid-cols-5 gap-5 mt-5 px-48 2xl:grid-cols-4 xl:grid-cols-3 xl:px-24 lg:grid-cols-2 lg:px-2 md:grid-cols-1 md:px-2'>
                {products &&
                    products.map((value, index) => (
                        // index < 10 && (
                        //     <ProductItem key={value.id} product={value} />
                        // )
                        <ProductItem key={value.id} product={value} />
                    ))}
            </ul>
        </div>
    );
}
