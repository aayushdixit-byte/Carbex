import React, { useState, useEffect } from 'react';
import projectImage from '../Assets/project_img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import product_details from './product_details';
import { Link } from 'react-router-dom';

function ProductList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect((e) => {
    // Make GET request to fetch products when component mounts
    fetch('http://localhost:8080/carbclex/getAll')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.log("error")
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [projects]);

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator while data is being fetched
  }

  return (
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
          {projects.map(project => (
            <div key={project.projectid} style={{backgroundColor:'white',width:'21%',height:'fit-content',marginBottom:'2rem',paddingBottom:'2rem'}} >
              <img src={projectImage} width={'100%'} height={'50%'} alt='project_image'/>
              <form className='cont_one' style={{marginInline:'2rem'}}>
                <h5 style={{color:'#182330',marginTop:'2rem',fontWeight:'bold'}}>{project.countryId.country}</h5>
                <h3 style={{color:'#065F24' ,fontWeight:'lighter'}}>{project.projectName}</h3>
                <h5 style={{color:'#000000' ,fontWeight:'lighter'}}>{project.projectDescription}</h5>
                <p>$10 per Tonne</p>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <FontAwesomeIcon icon={faCartShopping} color='#065F24' size='2x'/>
                  <Link to={`/project/${project.projectid}`} state={project}><button style={{width:'7rem',cursor:'pointer',backgroundColor:'white',border:'2px solid black'}}>SEE MORE</button></Link>
                </div>
              </form>
            </div>
          ))}
      </div>
  );
}

export default ProductList;
