import React from 'react';
import { FaCamera, FaLaptop, FaGamepad, FaHeadphones, FaMobileAlt } from 'react-icons/fa';

interface Product {
  name: string;
  price: number;
  category: string;
}

const products: Product[] = [
  { name: 'Camera', price: 120, category: 'Cameras' },
  { name: 'Laptop', price: 80, category: 'Computers' },
  { name: 'Game Console', price: 120, category: 'Gaming' },
  { name: 'Headphones', price: 120, category: 'Headphones' },
  { name: 'Smartphone', price: 120, category: 'Phones' },
  
];

const ProductList: React.FC = () => {
  return (
    <div>
      <h1>Flash Sale</h1>
      <div>
        {products.map((product) => (
          <div key={product.name}>
            <div>
              {product.category === 'Cameras' && <FaCamera />}
              {product.category === 'Computers' && <FaLaptop />}
              {product.category === 'Gaming' && <FaGamepad />}
              {product.category === 'Headphones' && <FaHeadphones />}
              {product.category === 'Phones' && <FaMobileAlt />}
             
            </div>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

      <div> <a href="/profile">Check your profile</a></div>
    </div>
  );
};

export default ProductList;