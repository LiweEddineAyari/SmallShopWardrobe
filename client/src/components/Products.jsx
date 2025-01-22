import { useEffect, useState } from 'react';
import { useFetch } from '../functions/useFetch';
import { appUrl } from '../vite.config';
import './products.css'
import StoreContext from '../functions/storeContext';
import { useContext } from 'react';
import { addToCart } from '../redux/cartReducer';
import { useDispatch } from 'react-redux';


function Products() {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const {filter}=useContext(StoreContext)
  const { data, loading, error } = useFetch(filter);
  const dispatch=useDispatch()
  useEffect(() => {
    data && setProducts(data);
  }, [data]);



  return (
    <div className='products'>
      {loading ? (
        "loading..."
      ) : (
        products.map((product) => 
        <div key={product.id} className='product'>
            <h2 className='product-title'>{product.attributes.title}</h2>
            <button className='product-btn' onClick={()=>{dispatch(addToCart({
              id: product.id,
              title:product.attributes.title,
              desc:product.attributes.description,
              price:product.attributes.price,
              image:product.attributes.image.data.attributes.url
            }))}}>Add To Cart</button>
            <h5 className='product-price'>{product.attributes.price} TND</h5>
            <img className='product-image' src={appUrl+product.attributes.image.data.attributes.url} alt="" />
            <p className='product-desc'>{product.attributes.description}</p>

            
        </div>
        )
      )}
    </div>
  );
}

export default Products;
