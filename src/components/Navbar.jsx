import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import CartItem from './CartStatus';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';
import Button from './Button';
import { BsFillPencilFill } from 'react-icons/bs';

const FONT_STYLE = 'text-sm';
export default function Navbar() {
    const { user, login, logout } = useAuthContext();
    const [mobileMenu, setMobileMenu] = useState('translate-x-full');

    const handleMenu = () => {
        if (mobileMenu === 'translate-x-full') {
            setMobileMenu('translate-x-0');
        } else {
            setMobileMenu('translate-x-full');
        }
    };

    return (
        <header className='fixed w-full top-0 h-24 z-10'>
            <div className='bg-brand h-12 px-7'>
                <div className='w-full max-w-screen-2xl flex items-center justify-between m-auto h-full md:justify-end'>
                    <div className='font-nanum text-2xl text-white flex md:hidden'>
                        <p className={`mr-4 ${FONT_STYLE}`}>#당일배송</p>
                        <p className={FONT_STYLE}>#KAKAO PLUS</p>
                    </div>
                    <div className='text-white absolute left-1/2 -translate-x-1/2'>
                        <Link to='/'>
                            <img src='../image/logo.png' alt='' />
                        </Link>
                    </div>
                    <div className=' text-white flex items-center md:hidden'>
                        {/* {user && user.isAdmin && (
                            <Link to='/shop/ProductAdd'>
                                <BsFillPencilFill className='mr-4' />
                            </Link>
                        )} */}
                        {user && (
                            <Link to='/shop/ProductAdd'>
                                <BsFillPencilFill className='mr-4' />
                            </Link>
                        )}
                        {user && (
                            <Link to='/MyCart'>
                                <CartItem />
                            </Link>
                        )}
                        {user && <p className='mr-4'>{user.displayName}</p>}

                        {user && <Button onClick={logout} text={'Logout'} />}
                        {!user && <Button onClick={login} text={'Login'} />}
                    </div>
                    <div
                        className='hidden md:block md:text-right'
                        onClick={handleMenu}
                    >
                        <MobileMenuButton />
                    </div>
                </div>
            </div>
            <div className='border-b border-gray-300 h-12 flex gap-14 justify-center items-center bg-white md:hidden'>
                <Link className={FONT_STYLE} to='/shop/ProductAll'>
                    전체
                </Link>
                <Link className={FONT_STYLE} to='/shop/ProductMan'>
                    남성
                </Link>
                <Link className={FONT_STYLE} to='/shop/ProductWomen'>
                    여성
                </Link>
                <Link className={FONT_STYLE} to='/shop/ProductAccessories'>
                    악세서리
                </Link>
            </div>
            <MobileMenu
                user={user}
                handleMenu={handleMenu}
                mobileMenu={mobileMenu}
            />
        </header>
    );
}
