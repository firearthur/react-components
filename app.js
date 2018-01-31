// TODO
var App = () => (
  <div>
    <h1>Grocery List</h1>
    <GroceryList list={['banans', 'Peanut Butter']}/>
  </div>
);
var GroceryList = (props) => (
  <ul>
      {props.list.map((element, index)=>{return <GroceryListItem item = {element} key = {index}/>})}
  </ul>
);

var GroceryListItem = (props) => (
  <div>
    <li>{props.item}</li>
  </div>
);

// var PeanutButter = () => (
//   <div>
//     <span></span>
//   </div>
// );
ReactDOM.render(<App />, document.getElementById('app'));
