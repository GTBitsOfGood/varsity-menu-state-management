import React from 'react'

const Receipt = props => {
  const [showing, setShowing] = React.useState(false)
  const toggleShowing = () => setShowing(!showing)
  return (
    <>
      <button className="show-receipt" onClick={toggleShowing}>
        Show receipt
      </button>
      <section className={`receipt ${showing ? 'showing' : ''}`}>
        <h2>Your order</h2>
        <dl>
          {props.purchasedItems.map(purchasedItem => (
            <div class="receipt-item">
              <dt>{purchasedItem.name}</dt>
              <dd>{purchasedItem.price}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}

export default Receipt
