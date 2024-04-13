
import image from '../Assets/Group 12.png';
import bgImage from '../Assets/dashboard.png'
import vector1 from '../Assets/Vector.png'
import vector2 from '../Assets/Vector (1).png'
import vector3 from '../Assets/Vector (2).png'
import group from '../Assets/Group.png'
import Navbar from './navbar'

const Home = () => {
    return (
        <>
            <div className='home-page  '>
                <Navbar/>
                <form className="font t-white" style={{ marginTop: '24rem', marginLeft: '3rem' }}>
                    <h1 style={{ fontSize: '3.2rem' }}>Erase Carbon Footprints and Combat Global Warming.</h1>
                    <h4 style={{ marginTop: '2rem' }}>Transforming Industries with Authentic Carbon Neutrality Solutions,<br /> Shaping a Trustworthy Path to Net Zero.</h4>
                    <div className='buttons mt-5'>
                        <button type="button" className="btn b btn-outline-primary sell">Sell Credit</button>
                        <button type="button" className="btn b buy">Buy Credit</button>
                    </div>
                </form>
            </div>
            <div className="  page-2  d-flex flex-row justify-content-around">
                <div className='box' style={{ width: '30rem', height: '20rem', backgroundColor: '#D9D9D9', marginTop: '8rem' }}></div>
                <form className=' font t-white' style={{ marginTop: '8rem' }}>
                    <h1 style={{ fontWeight: 'bolder' }} >With Carbex, you can offset<br /> your carbon footprints with <br />confidence</h1>
                    <h5>We're the industry's go-to for environmental solutions,<br /> connecting buyers and sellers of carbon credits with reliability<br /> and expertise. Join us in making a real impact on our planet.</h5>
                    <div className='buttons mt-5'>
                        <button type="button" className="btn b btn-outline-primary learn">LearnMore</button>
                    </div>
                </form>
            </div>
            <div className='  page-3 '>
                <div className="d-flex justify-content-around">
                    <div>
                        <h1 className='font' style={{ color: '#808080', fontWeight: 'bolder', marginTop: '15rem', marginLeft: '5rem', letterSpacing: '2px' }}><span style={{ color: '#2F4834' }}>Discover</span> how we help<br /> businesses to achieve<br /> carbon neutrality</h1>
                        <img src={image} style={{ marginTop: '20%', marginLeft: '-70px', zIndex: '1' }} alt='back' />
                    </div>
                    <form style={{ width: '40%', marginTop: '4%' }}>
                        <form >
                            <h1 className='tet font' style={{ fontWeight: 'bold', margin: '2rem 0rem', letterSpacing: '2px' }} >Transparency</h1>
                            <p style={{ color: '#808080' }}>We offer blockchain-based platform that ensures visibility and traceability in every stage of carbon offset transactions. Ensuring accuracy and reliability, we champion transparent reporting and rigorous measurement standards.</p>
                        </form>
                        <form>
                            <h1 className='tet font' style={{ fontWeight: 'bold', margin: '2rem 0rem', letterSpacing: '2px' }} >Accuracy</h1>
                            <p style={{ color: '#808080' }}>We employs cutting-edge technologies and standardized methodologies to guarantee the highest level of accuracy in emission reduction assessments.</p>
                        </form>
                        <form>
                            <h1 className='tet font' style={{ fontWeight: 'bold', margin: '2rem 0rem', letterSpacing: '2px' }} >Consistency</h1>
                            <p style={{ color: '#808080' }}>Our precise delivery in environmental impact assessments, provide businesses with clear, measurable results rather than ambiguous projections ensuring each credit represents a tangible CO2 reduction.</p>
                        </form>
                        <form>
                            <h1 className='tet font' style={{ fontWeight: 'bold', margin: '2rem 0rem', letterSpacing: '2px' }} >Reliability</h1>
                            <p style={{ color: '#808080' }}>Carbex pioneers a Verification Assurance Program, ensuring all projects undergo rigorous verification, providing businesses with a trustworthy platform for impactful and genuine sustainability efforts.</p>
                        </form>
                    </form>
                </div>
            </div>
            <div className="page-4 d-flex justify-content-between">
                <form className='t-white' style={{ width: '40%', marginTop: '10%', marginLeft: '10rem' }}>
                    <h1 style={{ fontSize: '5rem', fontWeight: 'bolder', marginRight: '0px' }}>Trade <l style={{ color: '#00E0Ff' }}>Smarter,</l><br /> Trade <l style={{ color: '#00FBA1' }}>Safer:</l></h1>
                    <p style={{ letterSpacing: '1px' }}>Streamline your token trading experience with <b>Credit Pool</b>. Secure, user-friendly, and powered by blockchain technology, it's your key to effortless transactions.</p>
                    <div className='buttons mt-5'>
                        <button type="button" className="btn b visit">Visit Marketplace</button>
                    </div>
                </form>
                <img src={bgImage} alt='dashboard' style={{ marginTop: '5%' }} />
            </div>
            <div className="page-5 d-flex justify-content-between">
                <form className="font" style={{width:'45%',marginTop:'8%',marginLeft:'auto',marginRight:'auto',marginBottom:'10rem',fontSize:'24px'}}>
                    <h1 style={{marginLeft:'auto',paddingLeft:'18rem',marginBottom:'2rem',fontSize:'3rem'}}>FAQs</h1>
                    <h1>What are Carbon Credits?</h1>
                    <h3>A carbon credit functions as proof of offsetting one metric ton of carbon emissions and is granted to projects accordingly. These projects involve activities such as reforestation, renewable energy, and waste-to-energy efforts.</h3>
                    <h1>Why Carbon Credits need to be tokenized?</h1>
                    <h3>Each credit undergoes thorough verification and monitoring to ensure project performance accuracy. Since carbon credits vary by project type—whether reforestation or renewable energy—the market can become disintegrated, posing challenges for suppliers and consumers. Tokenization is essential to streamline buying and selling, facilitating accessibility for all market participants.</h3>
                    <h1>How does the process works?</h1>
                    <h3>Through a carbon bridge, users can bring their carbon credits onto the blockchain and tokenize them into pools of similar tokens. When users bring their credits to the bridge, the initial step involves retiring the credit off-chain to prevent double spending. After the bridge verifies the credit's retirement and confirms its originating project, the credits are reissued as carbon tokens. This ensures that each carbon token can be traced back to its original project, with all details securely recorded on the blockchain.</h3>
                    <h1>Lorem ipsum dolor sit amet orem ipsum orem ipsum?</h1>
                    <h3>Tokenized carbon now stands poised as a new cornerstone for DeFi innovation. Leveraging blockchain technology in the battle against climate change, we're paving the way for decentralized finance to evolve into regenerative finance.</h3>
                </form>
            </div>
            <div className="font bold" style={{backgroundColor:'#DDF8D9',width:'70%',marginLeft:'auto',padding:'4rem 8rem'}}>
                <h1 className='lspace' style={{color:'#4F8326',marginBottom:'1rem'}}>Monetize Your Eco-Friendly Efforts<br/> <span style={{color:'#445B49'}}>Sell Carbon Credits with Ease</span></h1>
                <h4 className='font' style={{color:'#4F8326'}}>Maximize your sustainability efforts by effortlessly selling carbon credits. Our user-friendly platform simplifies the process, allowing you to easily convert your environmental contributions into revenue while making a positive impact on the planet.</h4>
                <div className='buttons mt-5' style={{paddingLeft:'22rem'}}>
                    <button type="button" className="btn b learnOne">Learn More</button>
                </div>
                <div className="rect"></div>
            </div>
            <h1 style={{marginTop:'8rem',marginLeft:'40%'}}>How to Sell Credits</h1>

            <div className='page-6'>
                <div className="d-flex justify-content-between" style={{backgroundColor:'#DDF8D9',paddingTop:'4rem',padding:'4rem',paddingBottom:'15rem'}}>
                    <div className="d-flex justify-content-between box" style={{width:'20%',backgroundColor:'white',borderRadius:'15px',padding:'1rem'}}>
                        <img src={vector1} style={{width:'30%',height:'30%'}} alt="hello" />
                        <div>
                            <form style={{width:'20%',backgroundColor:'white',marginLeft:'4rem',color:'#4F8326'}}>
                                <h1 style={{marginLeft:'5rem',fontWeight:'bold'}}>01</h1>
                                <h1 className='lspace'style={{fontSize:'2rem'}} >Upload Project Details</h1>
                            </form>
                            <p style={{margin:'4rem 0 8rem -4rem',marginBottom:'8rem',color:'#808080'}}>Check how much carbon your Project can soak up.</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between box" style={{width:'20%',backgroundColor:'white',borderRadius:'15px',padding:'1rem'}}>
                        <img src={group} style={{width:'30%',height:'30%'}} />
                        <div>
                            <form style={{width:'20%',backgroundColor:'white',marginLeft:'4rem',color:'#4F8326'}}>
                                <h1 style={{marginLeft:'5rem',fontWeight:'bold'}}>02</h1>
                                <h1 className='lspace' style={{fontSize:'2rem'}} >Certify Your Project</h1>
                            </form>
                            <p style={{margin:'4rem 0 8rem -4rem',marginBottom:'8rem',color:'#808080'}}>Get official approval for your carbon-saving project.</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between box" style={{width:'20%',backgroundColor:'white',borderRadius:'15px',padding:'1rem'}}>
                        <img src={vector2} style={{width:'30%',height:'30%'}} />
                        <div>
                            <form style={{width:'20%',backgroundColor:'white',marginLeft:'4rem',color:'#4F8326'}}>
                                <h1 style={{marginLeft:'5rem',fontWeight:'bold'}}>03</h1>
                                <h1 className='lspace' style={{fontSize:'2rem'}}>Sell Credits on Marketplace</h1>
                            </form>
                            <p style={{margin:'4rem 0 8rem -4rem',marginBottom:'8rem',color:'#808080'}}>Check how much carbon your Project can soak up.</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between box" style={{width:'20%',backgroundColor:'white',borderRadius:'15px',padding:'1rem'}}>
                        <img src={vector3} style={{width:'30%',height:'30%'}} />
                        <div>
                            <form style={{width:'20%',backgroundColor:'white',marginLeft:'4rem',color:'#4F8326'}}>
                                <h1 style={{marginLeft:'5rem',fontWeight:'bold'}}>04</h1>
                                <h1 className='lspace' style={{fontSize:'2rem'}} >Withdraw Funds in account</h1>
                            </form>
                            <p style={{margin:'4rem 0 8rem -4rem',marginBottom:'8rem',color:'#808080'}}>Check how much carbon your Project can soak up.</p>
                        </div>

                    </div>
                </div>
                <div className='buttons' style={{marginTop:'-12rem',marginLeft:'40%'}}>
                    <button type="button" className="btn b" style={{border:'4px solid #4F8326',width:'25rem',color:'#4F8326',fontWeight:'bold'}}>Sell Credits</button>
                </div>
            </div>

        </>
    )
}

export default Home;