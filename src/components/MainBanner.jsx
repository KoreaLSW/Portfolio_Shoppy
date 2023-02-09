import React from 'react';
import { getMainBannerImg } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import './mainBanner.css';

const BANNER_TITLE_TEXT =
    'text-white text-5xl font-bold 2xl:text-5xl xl:text-4xl lg:text-2xl md:text-sm text-center';
const BANNER_CONTENT_TEXT = 'text-white text-2xl font-bold mb-10 md:text-sm';
export default function MainBanner() {
    const navigate = useNavigate();

    const { data: banner } = useQuery(['banner'], () => getMainBannerImg());

    const handleBanner = () => {
        navigate(`/shop/ProductAll`);
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 350,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    };

    return (
        <ul className=''>
            <Slider {...settings}>
                {banner && (
                    <li key={banner[0]} className='relative'>
                        <img
                            className='object-cover '
                            src={banner[0]}
                            alt='banner01'
                        />
                        <div className='flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <h2 className={BANNER_TITLE_TEXT}>
                                최고의 품질의 옷을 만나보세요!
                            </h2>
                            <p className={BANNER_CONTENT_TEXT}>최대 40% SALE</p>

                            <Button
                                onClick={handleBanner}
                                text={'구경하러 가기'}
                            />
                        </div>
                    </li>
                )}
                {banner && (
                    <li key={banner[1]} className='relative'>
                        <img
                            className='object-cover '
                            src={banner[1]}
                            alt='banner02'
                        />
                        <div className='flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <h2 className={BANNER_TITLE_TEXT}>
                                최고의 품질의 옷을 만나보세요
                            </h2>
                            <p className={BANNER_CONTENT_TEXT}>최대 40% SALE</p>

                            <Button
                                onClick={handleBanner}
                                text={'구경하러 가기'}
                            />
                        </div>
                    </li>
                )}
                {banner && (
                    <li key={banner[2]} className='relative'>
                        <img
                            className='object-cover '
                            src={banner[2]}
                            alt='banner03'
                        />
                        <div className='flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <h2 className={BANNER_TITLE_TEXT}>
                                최고의 품질의 옷을 만나보세요
                            </h2>
                            <p className={BANNER_CONTENT_TEXT}>최대 40% SALE</p>

                            <Button
                                onClick={handleBanner}
                                text={'구경하러 가기'}
                            />
                        </div>
                    </li>
                )}
            </Slider>
        </ul>
    );
}
