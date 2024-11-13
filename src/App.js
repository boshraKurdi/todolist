import ShowItem from "./components/ShowList/ShowItem";
import InputItem from "./components/InputList/InputItem";
import { useState } from "react";
let index = 3;
function App() {
  const [InputI , setInputI] = useState({name: "" , age: ""}) 
  function Name(event){
      setInputI({...InputI , name: event})
    }
    function Age(event){
      setInputI({...InputI , age: event})
    }
  const [todoList , setTodoList] = useState([
    {
      id: 1,
      name: 'boshra',
      age: 21,
    },
    {
      id:2,
      name: 'aya',
      age: 26
    }
  ]);
  function DeleteItem(id){
    const newT = todoList.filter((list)=>{
      if (list.id === id) {
        return false
      }else{
  
        return true
      }
    })
    setTodoList(newT);
  }
  function EditItem(id){
    const newT = todoList.filter((list)=>{
      if (list.id === id) {
        setInputI({...InputI , name: list.name , age : list.age})
        return false
      }else{
  
        return true
      }
    })
    setTodoList(newT);
  }
  function Add(){
    if (InputI.name !==  "" && InputI.age !== "") {
      setTodoList([...todoList , { id:index , name:InputI.name , age:InputI.age}])
      index++;
      setInputI({...InputI , name: "" , age : ""})
    }
  }
  return (
    <div className="App container">
      <h1 className="text">TodoList</h1>
      <ShowItem item={todoList} delete={DeleteItem} edit={EditItem}/>
      <InputItem item={todoList} add={Add} name={Name} age={Age} getN={InputI.name} getG={InputI.age}/>
    </div>
  );
}

export default App;
