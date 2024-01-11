
import Nav from './navbar/nav'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Shop from './pagess/Shop'
import ShopCategory from './pagess/ShopCategory'
import Cart from './pagess/cart'
import Product from './pagess/product'
import Footer from './Component/Footer/Footer'
import LoginSignup from './pagess/loginsignup'
 import men_banner from './photo/banner_mens.png'
import women_banner from './photo/banner_women.png'
 import kids_banner from './photo/banner_kids.png'
function App() {
  

  return (
    <>
    
    
      <Router>
      <Nav/>
      <Routes>
     
        <Route path='/' element={<Shop/>}/>
        <Route path='/Mens' element={<ShopCategory banner={men_banner} category='men' />}/>
        <Route path='/Women' element={<ShopCategory banner={women_banner} category='women'/>}/>
        <Route path='/Kids' element={<ShopCategory banner={kids_banner} category='kid'/>}/>
        <Route path=':productId' elememt={<Product/>}/>
      </Routes>
      <Routes>
          <Route path='/Cart' elememt={< Cart/>} />
          <Route path='/Login' elememt={< LoginSignup/>} />
          
      </Routes>
      <Footer/>
      </Router>
        
    </>
  )
}

export default App
