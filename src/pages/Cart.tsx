import { useState } from "react"

function Cart(){
  const [orderRows, setOrderRows] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));

  // front-endis andmemudelid korda
  // lisame tellimusi back-endi
  // toote ostukorvist kustutamine
  // suurenda ja v2henda kogust ostukorvis
  // URLi muutuja --> edit product ja product details


  //key={} --> re-renderuste jaoks, meeldej2tmiseks, et ei peaks korduvalt tegema for-tsyklit
  return (
    <div>
      {orderRows.map(orderRow =>
        <div key={orderRow.product.id}>
          <div>{orderRow.product.name}</div>
          <div>{orderRow.product.price}$</div>
          <div>{orderRow.quantity}tk</div>
          <div>{orderRow.product.price * orderRow.quantity}$</div>
          <button>x</button>
        </div>
      )}
    </div>
  )
}

export default Cart
