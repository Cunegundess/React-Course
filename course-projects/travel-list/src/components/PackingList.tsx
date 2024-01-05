import { initialItems } from "../data/initialItems";
import Item from "./Item";

export default function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map(item => <Item item={item} />)}
      </ul>
    </div>
  )
}
