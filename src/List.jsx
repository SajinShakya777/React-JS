
function List(props){

  const category = props.category;

  const itemsList = props.items;

  const listItems = itemsList.map(item => <li key={item.name}>{item.name}: &nbsp; <b>{item.calories}</b></li>);

  // const fruits = [{id: 1, 'name': 'Apple', calories:95}, {id: 2, 'name': 'Banana', calories:105}, {id: 3, 'name': 'Coconut', calories:150}, {id: 4, 'name': 'Pineapple', calories:82}, {id: 5, 'name': 'Elderberry', calories:42}];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical order
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse alphabetical order
  // fruits.sort((a, b) => a.calories - b.calories); //numerical order (ascending)
  // fruits.sort((a, b) => b.calories - a.calories); //numerical order (descending)

  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

  // const listItems = highCalFruits.map(highCalFruits => <li key={highCalFruits.name}>{highCalFruits.name}: &nbsp; <b>{highCalFruits.calories}</b></li>);


  // const listItems = lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.name}>{lowCalFruits.name}: &nbsp; <b>{lowCalFruits.calories}</b></li>);

  //  const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);

  return(<>
  <h3 className="list-category">{category}</h3><ol className="list-items">{listItems}</ol>
  </>);
}

export default List;