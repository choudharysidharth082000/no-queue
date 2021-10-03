import './cart.css'
import {useEffect, useState} from 'react'
const Cartcard = ()=>
{
    const button = document.getElementById('subtract');
    
    const [value, setValue] = useState(0);
   
    const add =() =>
    
    {
        if(value > -1 )
        {
            button.disabled = false;
        }
        setValue(value+1)
    }
    const subtract = () =>
    {
        if(value == 1)
        {
            button.disabled = true;

        }
        setValue(value-1);
    }
    
    return(
        <div className="contents_main">
                <div className="cartContent">
                    <div className="imagecontainor">
                        <img src="http://www.zedamagazine.com/wp-content/uploads/2018/06/Indian-Food-Samosa-Dish-HD-Wallpapers.jpg" alt="itemImage" />

                    </div>
                    <div className="description">
                        <div className="content_containor">
                            <h2>Samosa</h2>
                            <p>Samosa is a fried dish with mix if spices and potatoes</p>

                        </div>

                    </div>
                    <div className="items">
                        
                        <div className="containor_items">

                            <button className="add" onClick={add}>+</button>
                            <p>{value}</p>
                            <button id="subtract" className= "subtract" onClick={subtract}>-</button>

                        </div>

                    </div>
                    <div className="cross">
                        <button className="bin"><i class="fas fa-trash-alt"></i></button>
                        
                    </div>
                </div>
                

            </div>
    )
}

export default Cartcard