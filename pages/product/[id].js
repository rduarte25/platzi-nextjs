import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
    const { query: {
        id
    } } = useRouter();
    return (
        <div>
            <h1>Hola desde la página statica del producto: {id}</h1>
        </div>
    );
};

export default ProductItem;