import Navbar from "./navbar"
import projectImage from '../Assets/detailsImg.png'
import { useState } from "react"

const ProjectDetails = () =>{
    
    const lst = ['Description','Verification','Documents','Offset Capacity','Images and Videos','Clients','Blockchain Address']  
    
    const [selectedItemIndex,setItemIndex] = useState(null)
    const handleClick = (index)=>{
        setItemIndex(index)
    }

    return (
        <>
            <Navbar where={true}/>
            <div className="proj-detail" style={{display:'flex',height:'auto',overflow:'hidden'}}>
                <form className="t-white t-shadow" style={{zIndex:'1',margin:'2rem',borderRight:'none'}}>
                    <h1 className="lspace" style={{fontSize:'3rem'}}>Sample name land fill Project</h1>
                    <h3><i className="fa-solid fa-location-dot fa-lg" style={{marginRight:'.6rem'}}></i>162 Mountain Ave, Arizona, USA</h3>
                    <ul style={{display:'flex',listStyle:'none',padding:'0',justifyContent:'space-between',alignItems:'center',fontSize:'1.2rem'}}>
                        <li>Certifier Name</li>
                        <li>Registry Name</li>
                        <li>Validator Name</li>
                    </ul>
                    <h5 style={{fontSize:'1.7rem'}}>Registry URL</h5>
                    <p style={{fontSize:'1.3rem'}}>A Brief overview of Project so that buyer do not have to study much
                    about it and they can jump to conclusion just after watching details 
                    above and reding this description below.</p>
                    <ul style={{display:'flex',listStyle:'none',padding:'0',justifyContent:'space-between',alignItems:'center',fontSize:'1.2rem'}}>
                        <li>Client 1</li>
                        <li>Client 2</li>
                        <li>Client 3</li>
                    </ul>
                    <h3>Amount</h3>
                </form>
                <img style={{zIndex:'-1',width:'50%',borderLeft:'none',opacity:'0.8'}} src={projectImage} alt="ProjectImage"/>
            </div>
            <div style={{display:'flex',justifyContent:'space-around',margin:'4rem 3rem'}}>
                <div className="frame">
                    <ul style={{listStyle:'none',color:'#3A8883',fontWeight:'bold',width:'100'}}>
                        {lst.map((item,index)=>(
                            <li className={selectedItemIndex === index?'active':''} key={index} onClick={()=>handleClick(index)} style={{cursor:'pointer'}}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="desc-prod" style={{width:'40%'}}>
                    <h1 className="lspace" style={{color:'#3A8883'}}>{selectedItemIndex===null?'Description':lst[selectedItemIndex]}</h1>
                    <p style={{color:'#808080'}}>Each credit undergoes thorough verification and monitoring to ensure project performance accuracy. Since carbon credits vary by project type—whether reforestation or renewable energy—the market can become disintegrated, posing challenges ddd suppliers and consumers. Tokenization is essential to streamline buying and selling, facilitating accessibility for all market participants.<br/>
                    Project performance accuracy. Since carbon credits vary by project type—whether reforestation or renewable energy—the market can become disintegrated, posing challenges for suppliers and consumers. Tokenization is essential to streamline buying and selling, facilitating accessibility for all market participants.</p>
                </div>
                <div className="prod-info" style={{color:'#808080',border:'1px solid #3A8883',borderRadius:'10px',padding:'2rem'}}>
                    <dl style={{display:'flex',marginRight:'2rem',justifyContent:'space-between'}}>
                        <dt style={{color:'#3A8883',marginRight:'4rem'}} >Ouantity</dt>
                        <dd>todo</dd>
                    </dl>
                    <dl style={{display:'flex',marginRight:'2rem',justifyContent:'space-between'}}>
                        <dt style={{color:'#3A8883',marginRight:'4rem'}} >Price</dt>
                        <dd>36.72/ tCO2e</dd>
                    </dl>
                    <dl style={{display:'flex',marginRight:'2rem',justifyContent:'space-between'}}>
                        <dt style={{color:'#3A8883',marginRight:'4rem'}} >Transaction Fee</dt>
                        <dd>$00.40</dd>
                    </dl>
                    <dl style={{display:'flex',marginRight:'2rem',justifyContent:'space-between'}}>
                        <dt style={{color:'#3A8883',marginRight:'4rem'}} >GST</dt>
                        <dd>$00.40</dd>
                    </dl>
                    <dl style={{display:'flex',marginRight:'2rem',justifyContent:'space-between'}}>
                        <dt style={{color:'#3A8883',marginRight:'4rem'}} >Total</dt>
                        <dd>$204.40</dd>
                    </dl>
                    <div>
                        <i className="fa-solid fa-cart-shopping fa-2xl" style={{color:'#3A8883',marginRight:'2rem'}}></i>
                        <button className="buy-now">Buy Now</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProjectDetails;