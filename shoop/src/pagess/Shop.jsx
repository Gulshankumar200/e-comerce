import react from 'react'
import Offers from '../Component/Offers/Offers'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import NewCollection from '../Component/NewCollection/NewCollection'
import NewsLetter from '../Component/NewsLetter/NewsLetter'

function Shop() {
    return(
        <>
        
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollection/>
            <NewsLetter/>
           
        </>
    )
    
}
export default Shop