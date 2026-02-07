import { useState} from "react"
import { useTodos } from "../store/todos";
// import {  type ChangeEvent } from "react"
const AddToDO = () => {
  const [todo, setTodo] = useState("");
  const {handleAddTodo} = useTodos();
  // function handleChange(e: ChangeEvent<HTMLInputElement>){ //normal function
  //   setTodo(e.target.value);
  // }
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{ //arrow function
    setTodo(e.target.value);
  }
  const handleFormSubmit=(e: React.SyntheticEvent<HTMLFormElement>)=>{
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  }

  return (
    <form onSubmit={handleFormSubmit} >
      <input type="text" placeholder="write your todo" value={todo} onChange={handleChange} />
      <button type="submit" >Add</button>
    </form>
  )
}

export default AddToDO