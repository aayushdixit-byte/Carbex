import category from '../Assets/project category.png'
import Navbar from './navbar'
import ProductList from './productlist'

const MarketPlace = () => {
    return (
        <>
            <div className='market' style={{backgroundColor:'#F4FFF6'}}>   
                    {/* <Navbar/> */}
                <div className='intro'>
                    <p style={{color:'#18311D',fontWeight:'bold'}}>Shape Greener Future:</p>
                    <h1 className='t-white lspace' style={{color:'#18311D'}}>Trade Verified <br/> Carbon Credits</h1>
                </div>
                <div className='categories' style={{margin:'4rem 1rem'}}>
                    <h3 style={{marginBottom:'2rem'}} >Browse By category</h3>
                    <img src={category} alt='categories' width={"100%"}/>
                </div>
                <div style={{margin:'4rem 2rem'}}>
                    <h3 className='lspace' style={{fontWeight:'bold',color:'#2F4834'}}>Projects</h3>
                    
                    <ProductList/>
                </div>
            </div>
        </>
    )
}

export default MarketPlace;