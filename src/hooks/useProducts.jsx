import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProducts } from '../api/firebase';
import { addNewProduct } from '../api/firebase';

export default function useProducts(productType) {
    const queryClient = useQueryClient();

    const productsQuery = useQuery(['products', productType], (productType) =>
        getProducts(productType)
    );

    const addProduct = useMutation(
        ({ product, url }) => addNewProduct(product, url),
        {
            onSuccess: () => queryClient.invalidateQueries(['products']),
        }
    );

    return { productsQuery, addProduct };
}
