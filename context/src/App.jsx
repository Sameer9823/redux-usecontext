import { useState } from "react";
import { TodoProvider } from "./context/todoContext";
import { useEffect } from "react";
import Form from "./Form";
import TodoItem from "./Item";

function App() {
  const [todo, setTodo] = useState([])

  const addTodo = (todo) => {
    setTodo(pre => [...pre, {...todo, id: Date.now()}])
  }

  const editTodo = (todo, id) => {
    setTodo(pre => pre.map((t) => t.id === id ? todo : t))
  }

  const deleteTodo = (id) => {
    setTodo(pre => pre.filter((t) => t.id !== id))
  }

  const toggleTodo = (id) => {
    setTodo(pre => pre.map((t) => t.id === id ? {...t, completed: !t.completed} : t))
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if(data){
      setTodo(data)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo))
  }, [todo])
 

 
  return (
    <TodoProvider
      value={{ todo, setTodo, addTodo, editTodo, deleteTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><Form/></div>
          <div className="flex flex-wrap gap-y-3">
            {todo.map((t) => (
              <div key={t.id}>
                <TodoItem todo={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
