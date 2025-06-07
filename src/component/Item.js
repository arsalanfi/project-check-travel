export default function Item ({item , onDeleteitem , onToggleItem ,}){
  return <li>
    <input type="checkbox" value={item.packed} onChange={() =>onToggleItem(item.id)}/>
    <span style={item.packed ? {textDecoration:"Line-through"} : {}}>
      {item.description} {item.quantity}
    </span>
    <button onClick = {() => onDeleteitem(item.id)}>❌</button>
    </li>
}