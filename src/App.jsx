import Card from "./Card"
import Button from "./Button.jsx";
import List from "./List.jsx";

// HOW TO STYLE REACT COMPONENTS WITH CSS
// --------------------------------------
// (not including external frameworks or preprocessors)

// 1. EXTERNAL
// 2. MODULES
// 3. INLINE

function App() {

    const fruits = [{id: 1, 'name': 'Apple', calories:95}, {id: 2, 'name': 'Banana', calories:105}, {id: 3, 'name': 'Coconut', calories:150}, {id: 4, 'name': 'Pineapple', calories:82}, {id: 5, 'name': 'Elderberry', calories:42}];

      const vegetables = [{id: 6, 'name': 'potato', calories:110}, {id: 7, 'name': 'celery', calories:105}, {id: 8, 'name': 'carrots', calories:150}, {id: 9, 'name': 'corn', calories:82}, {id: 5, 'name': 'broccoli', calories:42}];

  return(
    // <Card></Card>
    // <>
    //   <Card/>
    //   <Button/>

    // </>
    <>
    {/* {fruits.length >0 ? <List items={fruits} category="fruits" /> : null}
    {vegetables.length >0 ? <List items={vegetables} category="vegetables" /> : null} */}

      {/* Short circuiting with && operator */}
    {fruits.length >0 && <List items={fruits} category="fruits" /> }
    {vegetables.length >0 && <List items={vegetables} category="vegetables" /> }
    </>
  );

}

export default App
