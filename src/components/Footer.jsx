import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';

const POOTER_LIST = 'list-disc mb-3 cursor-pointer hover:text-white font-thin';
export default function Footer() {
    return (
        <footer className=' flex bg-brand justify-between mt-10 px-24 py-7 md:flex-col md:px-5 md:items-center'>
            <div className='text-gray-300 flex text-lg border-gray-300 md:mb-5 md:border-b md:pb-5'>
                <ul className='mr-10'>
                    <li className={POOTER_LIST}>개인정보처리방침</li>
                    <li className={POOTER_LIST}>이용약관</li>
                    <li className={POOTER_LIST}>이용안내</li>
                    <li className={POOTER_LIST}>임직원</li>
                    <li className={POOTER_LIST}>NOTICE</li>
                </ul>
                <ul>
                    <li className={POOTER_LIST}>Q&A</li>
                    <li className={POOTER_LIST}>REVIEW</li>
                    <li className={POOTER_LIST}>MEMBERSHIP</li>
                    <li className={POOTER_LIST}>CS CENTER</li>
                    <li className={POOTER_LIST}>STORE</li>
                </ul>
            </div>
            <div className='text-gray-300 md:mb-5 border-gray-300 md:border-b md:pb-5'>
                <p className='text-3xl font-semibold text-gray-300'>
                    CS CENTER
                </p>
                <p className='text-4xl font-bold mt-5 text-red-300'>
                    1234-5678
                </p>
                <div className='mt-5 flex items-center'>
                    <p className='mr-3 text-gray-300 font-semibold'>MON-FRI </p>
                    <p className='text-lg text-red-300 font-bold'>
                        AM 10:00 ~ PM 04:00
                    </p>
                </div>
                <div className='flex items-center'>
                    <p className='mr-7 text-gray-300 font-semibold'>LUNCH</p>
                    <p className='text-lg text-red-300 font-bold mr-2'>
                        12:00 ~ PM 01:00
                    </p>
                    <p className=''>SAT / SUN / HOLIDAY OFF</p>
                </div>
            </div>
            <div className='text-gray-300 flex flex-col md:mb-5 md:items-center'>
                <p className='text-3xl mb-5 font-bold md:text-4xl'>SNS</p>
                <div className='flex gap-4'>
                    <FaFacebookF className='text-white text-3xl cursor-pointer' />
                    <FiInstagram className='text-white text-3xl cursor-pointer' />
                    <BsTwitter className='text-white text-3xl cursor-pointer' />
                </div>
            </div>
        </footer>
    );
}
