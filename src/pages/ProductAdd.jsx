import React, { useState } from 'react';
import { addNewProduct } from '../api/firebase';
import { imageUploader } from '../api/imageUploader';

export default function ProductAdd() {
    const [product, setProduct] = useState({});
    const [file, setFile] = useState();
    const [isUploading, setIsUploading] = useState(false);
    const [success, setSuccess] = useState();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setFile(files && files[0]);
            return;
        }
        setProduct((product) => ({ ...product, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsUploading(true);
        imageUploader(file) //
            .then((url) => {
                addNewProduct(product, url) //
                    .then(() => {
                        setSuccess('성공적으로 등록되었습니다.');
                        setTimeout(() => {
                            setSuccess(null);
                        }, 4000);
                    });
            })
            .finally(() => setIsUploading(false));
    };

    return (
        <section className='mt-24 md:mt-12 w-full text-center'>
            <h2 className='pt-4 text-2xl font-bold my-4'>상품 추가하기</h2>
            {success && <p className='my-2'>{success}</p>}
            {file && (
                <img
                    className='w-1/2 mx-auto mb-2'
                    src={URL.createObjectURL(file)}
                    alt='local file'
                />
            )}
            <form className='flex flex-col px-12' onSubmit={handleSubmit}>
                <input
                    type='file'
                    accept='image/*'
                    name='file'
                    required
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='title'
                    value={product.title ?? ''}
                    placeholder='제품명'
                    required
                    onChange={handleChange}
                />
                <input
                    type='number'
                    name='price'
                    value={product.price ?? ''}
                    placeholder='가격'
                    required
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='category'
                    value={product.category ?? ''}
                    placeholder='카테고리'
                    required
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='description'
                    value={product.description ?? ''}
                    placeholder='제품 설명'
                    required
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='option'
                    value={product.option ?? ''}
                    placeholder='제품 옵션(콤마(,)로 구분)'
                    required
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='color'
                    value={product.color ?? ''}
                    placeholder='제품 색상(콤마(,)로 구분)'
                    required
                    onChange={handleChange}
                />
                <button
                    className='bg-brand text-white py-4 px-4 rounded-md hover:brightness-110'
                    disabled={isUploading}
                >
                    {isUploading ? '업로드중' : '제품 등록하기'}
                </button>
            </form>
        </section>
    );
}
