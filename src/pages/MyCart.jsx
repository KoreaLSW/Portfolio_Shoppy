import React from 'react';
import CartItem from '../components/CartItem';
import CartPrice from '../components/CartPrice';
import useCart from '../hooks/useCart';

export default function MyCart() {
    const {
        cartQuery: { isLoading, data: products },
    } = useCart();

    if (isLoading) return <p>Loading...</p>;

    const hasProducts = products && products.length > 0;

    return (
        <selection className='w-full min-h-screen mb-12 mt-24 md:mt-12 flex flex-col '>
            <h1 className='text-4xl mt-10 m-auto'>나의 장바구니</h1>
            <div className='border-b border-gray-300 w-full text-center mt-10  '></div>

            <div className=' flex grow xl:flex-col lg:flex-col md:flex-col'>
                {!hasProducts && <p>장바구니에 상품이 없습니다...</p>}
                {hasProducts && (
                    <ul className='w-full'>
                        {products &&
                            products.map((product) => (
                                <CartItem key={product.id} product={product} />
                            ))}
                    </ul>
                )}

                <CartPrice />
            </div>
        </selection>
    );
}
