import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addOrUpdateToCart, getCart, removeFormCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function useCart() {
    const { uid } = useAuthContext();
    const queryClient = useQueryClient();

    const cartQuery = useQuery(['carts', uid || ''], () => getCart(uid), {
        enabled: !!uid,
    });

    const addorUpdateItem = useMutation(
        (product) => addOrUpdateToCart(uid, product),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['carts', uid]);
            },
        }
    );

    const removeItem = useMutation((id) => removeFormCart(uid, id), {
        onSuccess: () => {
            queryClient.invalidateQueries(['carts', uid]);
        },
    });

    return { cartQuery, addorUpdateItem, removeItem };
}
