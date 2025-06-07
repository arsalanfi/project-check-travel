import { useState } from "react";
import Logo from './component/Logo';
import From from "./component/Form";
import PackingList from "./component/Packing";
import Stuts from "./component/status"


export default function App() {
  const [items , setItems] = useState([])

  function deleteList() {
    const confirmed = window.confirm('Are you sure delete all items ?')
  if(confirmed)setItems([]); 
}

    function handleAddItems(item) {
    setItems((items) => [...items ,item])
  }

  function handleDeleteItem(id) {
    setItems((item) =>item.filter((item) => item.id !== id) )
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? {...item , packed:!item.packed } : item))
  }

  return (
    <div className="app">
      <Logo/>
      <From onAddItems={handleAddItems}/>
      <PackingList onDeleteitem = {handleDeleteItem} 
      onToggleItem = {handleToggleItem}
      onClearList={deleteList} 
      items = {items}/>
      <Stuts items={items} />
    </div>

  )
}
