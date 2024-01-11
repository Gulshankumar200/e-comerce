import './nav.css'
import logo from '../photo/logo.png'
import cart_icon from'../photo/cart_icon.png'
import { useState } from 'react'
import { Link} from 'react-router-dom'
function Nav() {
  const[menu,setMenu]=useState("Shop")

    return (
      <>
        
          <div className='Navbar'>
            <div className='Nav-logo'>
            <img src={logo} />
            <p>Myshoper</p>
            </div>
            <ul className='Nav-item'>
                <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}} to="/">Shop</Link> {menu==="Shop"?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration:'none'}} to='/Mens'>Mens</Link> {menu==="Mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Woman")}}> <Link style={{textDecoration:'none'}} to='/Women'>Women</Link>{menu==="Woman"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none'}} to='/Kids'>Kids</Link> {menu==="Kids"?<hr/>:<></>}</li>
            </ul>
            <div className='Nav-login-cart'>
               <Link to='/login'> <button>Login</button></Link>
              <Link to='/cart'>  <img src={cart_icon} /></Link>
                <div className="Nav-cart-count">0</div>
            </div>
          </div>
      </>
    )
  }
  
  export default Nav