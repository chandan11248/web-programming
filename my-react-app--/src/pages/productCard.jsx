import { useState } from 'react';

function ProductCard (props){
    const [products, setProducts] = useState(props.products);

    const updatePrice = (index, amount) => {
        const updatedProducts = [...products];
        updatedProducts[index].price += amount;
        setProducts(updatedProducts);
    };

    return <div>
        {products.map((item, index) => {
            const increment = (index + 1) * 5;
            return (
                <div key={index}>
                    <p>
                        Name: {item.name} | Price: ${item.price}
                    </p>
                    <button onClick={() => updatePrice(index, increment)}>+${increment}</button>
                </div>
            );
        })}
    </div>
}

export default ProductCard;
