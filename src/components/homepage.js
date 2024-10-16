import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnapchat , faInstagram, faYoutube, faFacebookF,faXTwitter} from '@fortawesome/free-brands-svg-icons';
import approachImg from '../Assets/Our-Approach.svg'

const HomePage = () => {

    const [activeTab, setActiveTab] = React.useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

  return (
    <>
        <div className='home-page' >
            <div style={{display:'flex',paddingTop:'80vh',justifyContent:'space-between'}}> 
                <form className="font t-white" style={{marginLeft: '3rem' }}>
                    <h3 style={{ fontSize: '3.2rem', fontWeight: 'lighter' }}>Erase Carbon Footprints and Combat Global Warming.</h3>
                    <h4 style={{ marginTop: '2rem', fontWeight: 'lighter'}}>Transforming Industries with Authentic Carbon Neutrality Solutions,<br /> Shaping a Trustworthy Path to Net Zero.</h4>
                </form>
                <div className='icons' style={{display:'flex',flexDirection:'column',gap:'9px'}}>
                    <FontAwesomeIcon icon={faXTwitter} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faInstagram} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faYoutube} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faFacebookF} color='white' size='2x'/>
                    <FontAwesomeIcon icon={faSnapchat} color='white' size='2x'/>
                </div>
            </div>
        </div>
        <div>
            <div style={{width:'35%', marginInline:'auto',textAlign:'center',marginTop:'10%',fontWeight:'lighter'}}>
                <h1 style={{fontWeight:'lighter',marginBottom:'1rem'}}>With CarbClex, you can offset your carbon footprint with confidence</h1>
                <p style={{fontSize:'1rem',fontWeight:'lighter'}} >We're the industry's go-to for environmental solutions, connecting buyers and sellers of carbon credits with reliability and expertise. Join us in making a real impact on our planet.</p>
            </div>
            <div>
                <ul className='tab-list'>
                    <li className={`tab-item ${activeTab === 0 ? 'active' : ''}`} onClick={()=>handleTabClick(0)}>TRANSPARENT</li>
                    <li className={`tab-item ${activeTab === 1 ? 'active' : ''}`} onClick={()=>handleTabClick(1)}>ACURATE</li>
                    <li className={`tab-item ${activeTab === 2 ? 'active' : ''}`} onClick={()=>handleTabClick(2)}>CONSISTENT</li>
                    <li className={`tab-item ${activeTab === 3 ? 'active' : ''}`} onClick={()=>handleTabClick(3)}>RELIABLE</li>
                </ul>
                <div style={{display:'flex' ,justifyContent:'space-around',width:'50%',marginInline:'auto',marginTop:'2rem'}}>
                    <div style={{width:'45%'}}>
                        <p style={{color:'#454040',borderRight:'2px solid green',fontWeight:'lighter',textAlign:'justify',paddingRight:'3rem'}}>We offer blockchain-based platform that ensures visibility and traceability in every stage of carbon offset transactions.  Ensuring accuracy and reliability, we champion transparent reporting and rigorous measurement standards.</p>
                        <button className='b' style={{backgroundColor:'#065F24',color:'white',width:'10rem',padding:'8px'}}>Learn More</button>
                    </div>
                    <div className='circle' style={{border:'2px solid yellow'}}></div>
                </div>
            </div>
        </div>
        <div className="services">
            <h2 style={{margin:'15rem 5rem',marginBottom:'8rem',fontSize:'2.4rem',fontWeight:'lighter',color:'#065F24',letterSpacing:'2px'}}>Take First step,<br/> Calculate your<br/> Carbon footprint</h2>
            <div className="container" style={{margin:'6rem auto',display:'flex',flexDirection:'column',marginBottom:'10rem'}}>
                <div className="services-title" style={{margin:'auto'}}>
                    <h2 style={{fontWeight:'lighter',color:'#18311D',letterSpacing:'1px',marginBottom:'3rem'}}>Our Services</h2>
                </div>
                <div className="services-cards" style={{display:'flex',textAlign:'center',gap:'2rem'}} >
                    <div className="card">
                        <div className="card-header">
                            <h3>Strategic Offset Planning</h3>
                        </div>
                        <div className="card-body">
                            <p style={{color:'#454040',fontWeight:'lighter'}}>We offer blockchain-based platform that ensures visibility and traceability in</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3>Climate Consulting</h3>
                        </div>
                        <div className="card-body">
                            <p style={{color:'#454040',fontWeight:'lighter'}}>We offer blockchain-based platform that ensures visibility and traceability in</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3>Carbon Credits</h3>
                        </div>
                        <div className="card-body">
                            <p style={{color:'#454040',fontWeight:'lighter'}}>We offer blockchain-based platform that ensures visibility and traceability in</p>
                        </div>
                    </div>
                </div>
                <button className="view-all b" style={{width:'13rem',marginInline:'auto',height:'4rem',backgroundColor:'white',color:'#065F24',border:'3px solid #065F24'}}>View all</button>
            </div>
        </div>
        <div style={{width:'60%',marginInline:'auto',textAlign:'center'}}>
            <div style={{width:'70%',marginInline:'auto',marginBottom:'2rem'}}>
                <h2 style={{color:'#18311D',fontWeight:'lighter',marginBottom:'2rem'}}>Why offset with CarbClex?</h2>
                <p style={{fontWeight:'lighter'}}>With CarbClex, businesses can trust in our commitment to transparency, accuracy, and the genuine impact of our environmental projects.</p>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'2rem'}}>
                <p style={{width:'40%',fontWeight:'lighter'}}>With CarbClex, businesses can trust in our commitment to transparency, accuracy, and the genuine impact of our environmental projects.</p>
                <div className='circle'></div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'2rem'}}>
                <div className='circle'></div>
                <p style={{width:'40%',fontWeight:'lighter'}}>With CarbClex, businesses can trust in our commitment to transparency, accuracy, and the genuine impact of our environmental projects.</p>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'2rem'}}>
                <p style={{width:'40%',fontWeight:'lighter'}}>With CarbClex, businesses can trust in our commitment to transparency, accuracy, and the genuine impact of our environmental projects.</p>
                <div className='circle'></div>
            </div>
        </div>
        <div className="approach" style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'7rem',gap:'4rem'}}>
            <h2>Our Approach</h2>
            <img src={approachImg} alt="Description of SVG" style={{width:'80vw',height:'25vh'}}/>
            <button className="b" style={{width:'10rem',paddingBlock:'0.7rem',border:'2px solid #065F24',color:'#065F24'}}>Get Started</button>
        </div>
        <div className='products' style={{marginTop:'6rem'}}>
            <div style={{width:'40%',marginInline:'auto',textAlign:'center'}}>
                <h2>Our Projects</h2>
                <p>With CarbClex, businesses can trust in our commitment to transparency, accuracy, and the genuine impact of our environmental projects.</p>
            </div>
            <div style={{backgroundColor:'#F4FFF6',height:'60%',paddingBlock:'5rem',textAlign:'center'}}>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                    <div className='card-ele' style={{borderRadius:'2rem'}} >
                        <div className='for_image'></div>
                        <div style={{color:'#065F24',textAlign:'center',backgroundColor:'white',borderRadius:'2rem',fontWeight:'lighter',alignItems:'center', padding:'2rem 3rem'}}>
                            <h4 style={{fontWeight:'lighter'}}>Sample Name Project</h4>
                            <p style={{marginBottom:'0'}}>Fort Worth, TX</p>
                            <p>Methane capture</p>
                        </div>
                    </div>
                    <div className='card-ele' style={{borderRadius:'2rem'}} >
                        <div className='for_image'></div>
                        <div style={{color:'#065F24',textAlign:'center',backgroundColor:'white',borderRadius:'2rem',fontWeight:'lighter',alignItems:'center', padding:'2rem 3rem'}}>
                            <h4 style={{fontWeight:'lighter'}}>Sample Name Project</h4>
                            <p style={{marginBottom:'0'}}>Fort Worth, TX</p>
                            <p>Methane capture</p>
                        </div>
                    </div>
                    <div className='card-ele' style={{borderRadius:'2rem'}} >
                        <div className='for_image'></div>
                        <div style={{color:'#065F24',textAlign:'center',backgroundColor:'white',borderRadius:'2rem',fontWeight:'lighter',alignItems:'center', padding:'2rem 3rem'}}>
                            <h4 style={{fontWeight:'lighter'}}>Sample Name Project</h4>
                            <p style={{marginBottom:'0'}}>Fort Worth, TX</p>
                            <p>Methane capture</p>
                        </div>
                    </div>
                </div>
                <button className='b' style={{fontWeight:'bolder',width:'15rem',height:'5rem',border:'5px solid #065F24',backgroundColor:'#F4FFF6',color:'#065F24',marginBlock:'4rem'}}>View All</button>
            </div>
        </div>
        <div style={{display:'flex',height:'50vh',justifyContent:'space-around',alignItems:'center',backgroundColor:"#065F24",paddingBlock:'5rem'}}>
            <div>
                <h1 style={{color:'white',fontWeight:'lighter',marginBlock:'auto'}}>
                Make true impact <br/> on preventing <br/> Climate change <br/>
                <span style={{fontWeight:'500'}}>Join us</span>
                </h1>
            </div>
            <form style={{color:'white',borderRadius:'2rem'}}>
                <div style={{marginBottom:'1rem'}}>
                    <label><i>Name</i></label><br/>
                    <input type="text" required style={{borderRadius:'6px',height:'40px',width:'18rem'}}/>
                </div>
                <div style={{marginBottom:'1rem'}}>
                    <label><i>Business Name</i></label><br/>
                    <input type="text" required style={{borderRadius:'6px',height:'40px',width:'18rem'}}/>
                </div>
                <div style={{marginBottom:'1rem'}}>
                    <label><i>Email</i></label><br/>
                    <input type="email" required style={{borderRadius:'6px',height:'40px',width:'18rem'}} />
                </div>
                <div style={{marginBottom:'1rem'}}>
                    <label><i>Phone/Mobile no.</i></label><br/>
                    <input type="integer" required style={{borderRadius:'6px',height:'40px',width:'18rem'}}ed />
                </div>
                <button className='b' style={{width:'10rem',paddingBlock:'0.4rem',marginTop:'0.7rem',backgroundColor:'white',color:'#065F24'}}>Send</button>
            </form>
        </div>
        <div>
            <div style={{textAlign:'center',marginBlock:'5rem'}}>
                <h2>Are you a project Developer?</h2>
                <p>Register your carbon-offset projects and sell verified credits on our secure marketplace.</p>
            </div>
            <div style={{color:'white',backgroundColor:'#3A8883',textAlign:'center',height:'45vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h1>Monetize Your Eco-Friendly Efforts: </h1>
                <h2>Sell Carbon Credits with ease</h2>
                <button style={{backgroundColor:'#3A8883',border:'2px solid white',color:'white',width:'16rem',marginTop:'2rem',padding:'0.6rem 2rem'}} >REGISTER PROJECT</button>
            </div>
        </div>
        <div>
            <div style={{textAlign:'center',marginBlock:'5rem'}}>
                <h2>Market Insights</h2>
                <p style={{width:'40vw',marginInline:'auto'}}>With CarbClex, businesses can trust in our commitment to transparency, accuracy, and the genuine impact of our environmental projects.</p>
            </div>
            <div style={{backgroundColor:'#F7F7F7',paddingBlock:'8rem'}}>
                <div style={{display:'flex',justifyContent:'flex-end',marginRight:'3rem',marginBottom:'4rem'}}>
                    <button className='b' style={{width:'8rem',padding:'0.5rem 0.8rem',color:'#065F24',backgroundColor:'#F7F7F7',border:'2px solid #065F24'}}>Our Blog</button>

                </div>
                <div style={{display:'flex',justifyContent:'space-around'}}>

                    <div className='card-ele' style={{borderRadius:'2rem'}} >
                        <div className='for_image'></div>
                        <div style={{color:'#065F24',backgroundColor:'white',fontWeight:'lighter',   alignItems:'center', padding:'2rem 3rem',width:'21rem'}}>
                            <h4 style={{fontWeight:'lighter'}}>Understanding Carbon Credits:</h4>
                            <p style={{marginBottom:'0'}}> A Beginner's Guide</p>
                        </div>
                    </div>
                    <div className='card-ele' style={{borderRadius:'2rem'}} >
                        <div className='for_image'></div>
                        <div style={{color:'#065F24',backgroundColor:'white',width:'21rem',fontWeight:'lighter', alignItems:'center', padding:'2rem 3rem'}}>
                            <h4 style={{fontWeight:'lighter'}}>How to Calculate Your Carbon Footprint and Why It Matters?</h4>
                        </div>
                    </div>
                    <div className='card-ele' style={{borderRadius:'2rem'}} >
                        <div className='for_image'></div>
                        <div style={{color:'#065F24',backgroundColor:'white',width:'21rem',fontWeight:'lighter',   alignItems:'center', padding:'2rem 3rem'}}>
                            <h4 style={{fontWeight:'lighter'}}>Blockchain and Carbon Credits: </h4>
                            <p style={{marginBottom:'0'}}>Ensuring Transparency and Trust in Offsetting</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage
