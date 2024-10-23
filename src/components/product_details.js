import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Details = () => {

    const [activeTab, setActiveTab] = React.useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
  return (
    <>
        <header style={{height:'70vh',marginTop:'8rem',backgroundColor:'#065F24',color:'white',paddingTop:'55vh' }}>
            <div style={{marginLeft:'3rem',top:'20rem'}}>
                <h1>Forest Conservation Initiative</h1>
                <div style={{display:'flex'}}>
                    <FontAwesomeIcon icon={faLocationDot} color='white' size='2x' style={{marginInline:'1rem'}}/>
                    <p>Mountain Ave, Arizona, USA</p>
                </div>
            </div>
        </header>
        <nav>
            <ul>
                <li className={`${activeTab === 0 ? 'active_desc' : ''}`} onClick={()=>handleTabClick(0)}>OVERVIEW</li>
                <li className={`${activeTab === 1 ? 'active_desc' : ''}`} onClick={()=>handleTabClick(1)}>PROJECT DETAILS</li>
                <li className={`${activeTab === 2 ? 'active_desc' : ''}`} onClick={()=>handleTabClick(2)}>DESCRIPTION</li>
                <li className={`${activeTab === 3 ? 'active_desc' : ''}`} onClick={()=>handleTabClick(3)}>VERIFICATION</li>
                <li className={`${activeTab === 4 ? 'active_desc' : ''}`} onClick={()=>handleTabClick(4)}>DOCUMENT</li>
                <li className={`${activeTab === 5 ? 'active_desc' : ''}`} onClick={()=>handleTabClick(5)}>STATUS</li>
            </ul>
        </nav>
        <div style={{display:'flex',justifyContent:'space-around',marginTop:'4rem'}}>
            <div style={{width:'40%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <h2 style={{textAlign:'center',color:'#065F24',marginBottom:'2rem'}}>OVERVIEW</h2>
                <p>This project helps small communities plant trees to create a nature-based carbon removal system that helps train leaders and pull families out of poverty. This project helps small communities plant trees to create a nature-based carbon removal system that helps train leaders and pull families out of poverty.</p>
            </div>
            <div className='grad_border' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'1rem',padding:'2rem 4rem'}}>
                <h3 className='grad_text' style={{}}>OFFSET WITH <br/> THIS PROJECT</h3>
                <span style={{display:'flex',gap:'10px'}}>
                    <h3 style={{color:'#37AE56'}}>-</h3>
                    <h3 style={{border:'2px solid grey',padding:'.1rem 3rem'}}>1</h3>
                    <h3 style={{color:'#37AE56'}}>+</h3>
                </span>
                <p>price</p>
                <button className="grad_border" style={{color:'white',backgroundImage:'linear-gradient(to right,#37AE56,#1A93D7)',fontWeight:'bold',paddingBlock:'1rem',width:'13rem',backgroundColor:'white'}}>Buy Now</button>
                <button className="grad_border grad_text" style={{paddingBlock:'1rem',width:'13rem',backgroundColor:'white',fontWeight:'bold'}}>Add to Cart</button>
            </div>
        </div>
        <div>
            <div style={{display:'flex',justifyContent:'center',gap:'1rem',marginTop:'8rem'}}>
                <div className='pro_image'></div>
                <div className='pro_image'></div>
                <div className='pro_image'></div>
            </div>
            <ul style={{display:'flex',justifyContent:'center',marginTop:'2rem'}}>
                <li className='pro_tags'></li>
                <li className='pro_tags'></li>
                <li className='pro_tags'></li>
                <li className='pro_tags'></li>
            </ul>
        </div>
        <div style={{marginLeft:'4rem'}}>
            <h2 style={{color:'#065F24'}}>PROJECT DETAILS</h2>
            <form style={{marginTop:'3rem',marginLeft:'6rem'}}>
                <span style={{display:'flex', gap:'4rem',marginBottom:'2rem'}}>
                    <h4>Project Type:</h4>
                    <p>Community Project/Forestation</p>
                </span>
                <span style={{display:'flex',gap:'4rem',marginBottom:'2rem'}}>
                    <h4>Project ID:</h4>
                    <p></p>
                </span>
                <span style={{display:'flex',gap:'4rem',marginBottom:'2rem'}}>
                    <h4>Verification Standards:</h4>
                    <p></p>
                </span>
            </form>
        </div>
        <div>
            <h2 style={{width:'fit-content',marginInline:'auto',marginTop:'4rem'}}>DESCRIPTION</h2>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <span style={{width:'60vw',marginBottom:'3rem'}}>
                    <h3 style={{marginBottom:'8px',color:'#065F24',fontWeight:'light'}}>Mission & Vision</h3>
                    <p>This project helps small communities plant trees to create a nature-based carbon removal system that helps train leaders and pull families out of poverty.</p>
                </span>
                <span style={{width:'60vw',marginBottom:'3rem'}}>
                    <h3 style={{marginBottom:'8px',color:'#065F24',fontWeight:'light'}}>How it works</h3>
                    <p>This project helps small communities plant trees to create a nature-based carbon removal system that helps train leaders and pull families out of poverty.</p>
                </span>
                <span style={{width:'60vw',marginBottom:'3rem'}}>
                    <h3 style={{marginBottom:'8px',color:'#065F24',fontWeight:'light'}}>Environmental and Social Benefits</h3>
                    <p>This project helps small communities plant trees to create a nature-based carbon removal system that helps train leaders and pull families out of poverty.</p>
                </span>
                <span style={{width:'60vw',marginBottom:'3rem'}}>
                    <h3 style={{marginBottom:'8px',color:'#065F24',fontWeight:'light'}}>Challenges</h3>
                    <p>This project helps small communities plant trees to create a nature-based carbon removal system that helps train leaders and pull families out of poverty.</p>
                </span>
            </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'2rem'}}>
            <h4>LOCATION</h4>
            <div style={{width:'35vw',height:'15vw',backgroundColor:'#065F24'}}></div>
            <h4>Verification and Certification</h4>
            <div style={{display:'flex',gap:'4rem'}}>
                <div style={{width:'4rem',height:'4rem',borderRadius:'100px',backgroundColor:'#065F24'}}></div>
                <div style={{width:'4rem',height:'4rem',borderRadius:'100px',backgroundColor:'#065F24'}}></div>
                <div style={{width:'4rem',height:'4rem',borderRadius:'100px',backgroundColor:'#065F24'}}></div>
            </div>
            <h4>DOCUMENTS</h4>

        </div>
    </>
  )
}

export default Details
