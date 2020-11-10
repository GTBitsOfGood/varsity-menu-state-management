import React from "react";

const MenuItem = (props) => {
  const [selected, setSelected] = React.useState(false);

  const handleClick = () => {
    if (selected) {
      props.removePurchasedItem(props.name);
    } else {
      props.addPurchasedItem({
        name: props.name,
        price: props.price,
      });
    }
    setSelected(!selected);
  };

  return (
    <button
      className={selected ? "menu-item selected" : "menu-item"}
      onClick={handleClick}
    >
      <img src={props.picture} alt={props.name} />
      <dt>{props.name}</dt>
      <dd>{props.price}</dd>
    </button>
  );
};

export default MenuItem;
