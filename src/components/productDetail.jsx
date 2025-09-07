import React from 'react';

const ProductDetail = ({ productDetail }) => {
    return (
        <div className='product-detail'>
            {productDetail && (
                <>
                    <img src={productDetail.image} alt={productDetail.name} />
                    <h2>{productDetail.name}</h2>
                    <p>{productDetail.description}</p>
                    <p>Price: {productDetail.price}</p>
                    <p>Discount: {productDetail.discount}</p>
                </>
            )}
        </div>
    );
};

export default ProductDetail;
