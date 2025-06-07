
export default function Stuts({items}) {
  if(!items.length)
    return(
    <p className="stats">
      <em>Star add task for travel  ✈️</em>
    </p>);
  const numItem = items.length
  const numPacked = items.filter(items => items.packed ).length
  const percantage = Math.round((numPacked/numItem) * 100)
  return(
    <footer className="stats">
      <em>
        {percantage === 100 ? 'You got everything ! ready to go ✈️':
        `💼You have ${numItem} items on yuor list , and you already packed ${numPacked} (${percantage}%)`
        }
      </em>
    </footer>
  ) 
}
