import cart from './assets/cart.svg'
import './CartWidget.css'
const CartWidget = () => {
    return(
        <div className='Cart'>
        <img src={cart} alt= "Cart-widget"/>
        <h4 className='NumeroCart'>0</h4>
        </div>
    )
}
export default CartWidget