import React, { useState, useEffect } from 'react';
import projectImage from '../Assets/project_img.png'

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Make GET request to fetch products when component mounts
    fetch('http://localhost:5050')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        console.log("this data is inside products array",products[2].productName);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [products]);

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator while data is being fetched
  }

  return (
    <>{products.map(product => (

      <div key={product.id} style={{display:'flex',width:'80vw',backgroundColor:'#2C4331',borderRadius:'3rem',margin:'3rem auto'}} >
        <img src={projectImage} alt='project image'/>
        <form className='cont_one' style={{color:'white',fontWeight:'bold',margin:'4rem 6rem'}}>
          <h1 className='lspace' style={{fontSize:'4rem',fontWeight:'bold'}}>{product.productName}</h1>
          <h3 className='lspace' style={{marginBlock:'2rem',fontSize:'3rem',fontWeight:'bold'}}>Location</h3>
          <h5 style={{fontSize:'25px'}}>{product.productDescription}</h5>
        </form>
      </div>

    ))}
    </>
  );
}

export default ProductList;

{/* <ul>
  {products.map(product => (
    <li key={product.id}>
      <strong>{product.productName}</strong>: {product.productDescription}
    </li>
  ))}
</ul> */}