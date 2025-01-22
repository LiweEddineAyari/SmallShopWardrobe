import { useEffect, useState } from 'react';
import { useFetch } from '../functions/useFetch';
import './products.css';
import Checkbox from './Checkbox';

function Categories() {
  const [categories, setCategories] = useState([]);

  const { data, loading, error } = useFetch('/categories?populate=*');

  useEffect(() => {
    data && setCategories(data);
  }, [data]);


  return (
    <div className='filter'>
      {loading ? (
        "loading..."
      ) : (
        categories.map((category) => (
          <Checkbox key={category.id} category={category} />
        ))
      )}
    </div>
  );
}

export default Categories;
