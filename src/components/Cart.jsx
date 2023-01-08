import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'

const Cart = () => {
    const { cart, cartTotal, priceTotal,  clear, removeItem } = useContext(CartContext)
    
    if (cartTotal() === 0) {
        return (
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-md-12 text-center'>
                        <div className="alert alert-danger" role="alert">No se encontraron productos!!!
                        </div>
                        <Link to={"/"} className="btn btn-outline-dark">Volver a pagina principal</Link>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className='container'>
            <div className='row my-5'>
                <div className='col-md-12'>
                    <table className="table  ">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end">
                                <Link onClick={clear} className="btn btn-danger " >Vaciar Carrito</Link>
                                </th>
                            </tr>

                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Productos</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.image} alt={item.name} width={80} /></td>
                                        <td className="align-middle">{item.name}</td>
                                        <td className="align-middle">{item.quantity}</td>
                                        <td className="align-middle">${item.quantity * item.price}</td>
                                        <td className="align-middle text-end "><Link onClick={() => { removeItem(item.id) }}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16" alt={"Eliminar productos"}>
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                        </svg></Link></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="align-middle" >Total a pagar</td>
                                <td className="align-middle">${priceTotal()}</td>
                                <td className="text-end"><Link to={"/checkout"}><button className="btn btn-outline-success align-middle">Finalizar compra</button></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart
