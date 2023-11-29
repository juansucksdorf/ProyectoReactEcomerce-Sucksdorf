import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }
    const decrement = () => {
        if (quantity > 1 ) {
            setQuantity(quantity-1)
        }
    }
    return (
        <div className='Counteiner'>
            <div className='Controls' >
                <button className='Button btn btn-secondary'  onClick={decrement} >-</button>
                <h3 className='Number' >{quantity} </h3>
                <button className='Button btn btn-secondary' onClick={increment} >+</button>
            </div>
            <div className='Agregarbtn'>
            <button className='Button btn btn-secondary' onClick={() => onAdd(quantity)} disabled={stock <= 0}>Add</button>

            </div>
        </div>
        
    )
}
export default ItemCount