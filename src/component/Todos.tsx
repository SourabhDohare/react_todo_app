import { useTodos, type Todo } from "../store/todos"
import { useSearchParams } from "react-router-dom";

const Todos = () => {
  const {todos, toggleTodoAsCompleted, handleDeleteTodo} = useTodos();

  let filterData = todos;


  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");
 
  
  if(todosData === "active"){
    filterData = filterData.filter((task)=>!task.completed)
  }

  if(todosData === "completed"){
    filterData = filterData.filter((task)=>task.completed)
  }
 console.log("~file : todos.tsx:10 ~ Todos ~ todosData:", todosData);
  return (
    <ul className="main-task ">
      {
        filterData.map((todo: Todo)=>{
          return <li key={todo.id}>
            <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={()=>toggleTodoAsCompleted(todo.id)}/>
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {
              todo.completed && (
                <button type="button" onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
              )
            }
          </li>
        })
      }
    </ul>
  )
}

export default Todos