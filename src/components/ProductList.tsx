import ProductCard from './ProductCard';
import appleImage from '../images/apple.jpg';
import orangeImage from '../images/orange.avif';
import grapesImage from '../images/grapes.jpg';
import watermelonImage from '../images/watermelon.jpg';

function ProductList() {
    return (
        <div className='products-container'>
            {/* PRODUCT CARDS */}
            <ProductCard 
                product={{ name: 'Apple', unitPrice: 100 }}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum nibh eget orci rhoncus, eu semper metus molestie."
                image={appleImage}
            />
            <ProductCard 
                product={{ name: 'Orange', unitPrice: 150 }}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum nibh eget orci rhoncus, eu semper metus molestie."
                image={orangeImage}
            />
             <ProductCard 
                product={{ name: 'Grapes', unitPrice: 100 }}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum nibh eget orci rhoncus, eu semper metus molestie."
                image={grapesImage}
            />
            <ProductCard 
                product={{ name: 'Watermelon', unitPrice: 150 }}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum nibh eget orci rhoncus, eu semper metus molestie."
                image={watermelonImage}
            />
        </div>
    )
}

export default ProductList