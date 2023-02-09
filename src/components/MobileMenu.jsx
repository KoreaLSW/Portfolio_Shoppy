import React from 'react';
import { login, logout } from '../api/firebase';
import { HiX } from 'react-icons/hi';
import Button from './Button';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import CartItem from './CartStatus';

const FONT_STYLE =
    'flex items-center text-sm text-brand h-12 border-b border-b-brand px-2 mx-2';
export default function MobileMenu({ user, handleMenu, mobileMenu }) {
    return (
        <div
            className={`absolute w-2/3 h-screen border border-x-white z-10 top-0  text-white bg-white transition-all right-0 ${mobileMenu}`}
        >
            <div className='flex h-12 items-center px-3 justify-between bg-brand'>
                {user && <Button onClick={logout} text={'Logout'} />}
                {!user && <Button onClick={login} text={'Login'} />}
                {user && (
                    <Link to='/shop/ProductAdd'>
                        <BsFillPencilFill />
                    </Link>
                )}
                {user && (
                    <Link to='/MyCart'>
                        <CartItem />
                    </Link>
                )}

                <HiX
                    className='text-white text-xl cursor-pointer '
                    onClick={handleMenu}
                />
            </div>

            <img
                className='px-2 mt-5 w-full h-56 object-cover'
                src='https://res.cloudinary.com/dsopqs4i6/image/upload/v1675031432/xel4toagzdxuvgwczvbf.jpg'
                alt=''
            />

            <ul className='flex flex-col mt-5'>
                <Link
                    className={FONT_STYLE}
                    to='/shop/ProductAll'
                    onClick={handleMenu}
                >
                    전체
                </Link>
                <Link
                    className={FONT_STYLE}
                    to='/shop/ProductMan'
                    onClick={handleMenu}
                >
                    남성
                </Link>
                <Link
                    className={FONT_STYLE}
                    to='/shop/ProductWomen'
                    onClick={handleMenu}
                >
                    여성
                </Link>
                <Link
                    className={FONT_STYLE}
                    to='/shop/ProductAccessories'
                    onClick={handleMenu}
                >
                    악세서리
                </Link>
            </ul>
        </div>
    );
}
