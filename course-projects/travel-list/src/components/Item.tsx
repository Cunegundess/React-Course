import { ItemProps } from "../data/initialItems"


function Item({ item }: {item: ItemProps[number] }) {
  return (
    <li>
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button>X</button>
    </li>
  )
}

export default Item