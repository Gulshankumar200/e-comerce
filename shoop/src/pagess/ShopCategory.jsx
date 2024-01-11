import { useContext, useState } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../Context/Context'
import dropdown_icon from '../photo/dropdown_icon.png'
import Item from '../Component/Items/Item'
function ShopCategory(props) {
    const {all_products}=useContext(ShopContext)
  
    return(
        <div className="shop-category">
                <img src={props.banner} alt=''/>
                <div className="shopcategory-indexsort">
                    <p>
                        <samp>Sowing 1-12</samp> out of 36 product
                    </p>
                    <div className="shopcategory-sort">
                        Sort by <img src={dropdown_icon} alt=''/>
                    </div>
                </div>
                <div className="shopcategory-products">
                    {all_products && all_products.map((item ,i)=>{
                        if(props.category===item.category){
                            return<Item key={i} id={item.id} name={item.name}
                            image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                        }
                        else{
                            return (null)
                        }

                    })}
                </div>

        </div>
    )
    
}
export default ShopCategory