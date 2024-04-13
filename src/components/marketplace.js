import category from '../Assets/project category.png'
import Navbar from './navbar'
import ProductList from './productlist'

const MarketPlace = () => {
    return (
        <>
            <div className='market'>   
                <div className='intro'>
                    <Navbar/>
                    <h1 className='t-white lspace cont' style={{fontWeight:'bold',margin: "5rem auto"}}>Some Text For Buyers who wanted of invest in offset by chosing project of their choice</h1>
                </div>
                <div className='categories' style={{margin:'4rem 2rem'}}>
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