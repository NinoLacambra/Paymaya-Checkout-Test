
import { Dispatch } from 'redux';
import { useDispatch } from "react-redux"
import { addToCartThunk } from '../thunks/cart';

interface ProductCardProps {
    product: Product;
    description?: string
    image: string;
}

function ProductCard ({ product, description, image }: ProductCardProps) {
    const dispatch: Dispatch<any> = useDispatch()

    return (
        <>
            <div className="product-card-container">
                <div className="product-card-header">
                    <img src={image} alt={product.name} className='product-image' />
                    <h2> {product.name} </h2>
                    <h4> PHP {product.unitPrice} </h4>
                </div>
                <div>
                    <div>
                        <p> {description} </p>
                    </div>
                    <div className="flex-right">
                    <button type="submit" onClick={() =>  dispatch(addToCartThunk(product))} className='btn green'>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
   )
}

export default ProductCard