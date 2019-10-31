import React from 'react'

const MenuItem = props => (
  <button class="menu-item">
    <img src={props.picture} alt={props.name} />
    <dt>{props.name}</dt>
    <dd>{props.price}</dd>
  </button>
)
export default MenuItem
