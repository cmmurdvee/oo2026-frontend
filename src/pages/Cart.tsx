import { useState } from "react"
import type { OrderRow } from "../models/OrderRow";

function Cart(){
  const [orderRows, setOrderRows] = useState<OrderRow[]>(JSON.parse(localStorage.getItem("cart") || "[]"));


  const deleteFromCart = (index: number) => {
    orderRows.splice(index,1); // <---- kustutamiseks, esimene nr on mitmendat. teine nr on mitu tk alates sellest
    setOrderRows([...orderRows]); // setOrderRow --> HTMLi uuendamiseks. [...] m2lukeha kustutamiseks
  }

  // front-endis andmemudelid korda
  // lisame tellimusi back-endi
  // toote ostukorvist kustutamine
  // suurenda ja v2henda kogust ostukorvis
  // URLi muutuja --> edit product ja product details


  //key={} --> re-renderuste jaoks, meeldej2tmiseks, et ei peaks korduvalt tegema for-tsyklit
  return (
    <div>
      {orderRows.map((orderRow, index) =>
        <div key={orderRow.product.id}>
          <div>{orderRow.product.name}</div>
          <div>{orderRow.product.price}$</div>
          <div>{orderRow.quantity}tk</div>
          <div>{orderRow.product.price * orderRow.quantity}$</div>
          <button onClick={() => deleteFromCart(index)}>x</button>
        </div>
      )}
    </div>
  )
}

export default Cart
