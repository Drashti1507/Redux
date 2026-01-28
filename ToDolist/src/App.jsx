import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useSelector , useDispatch } from 'react-redux';
import { addTodo , deleteTodo , updateTodo } from './redux/todolistslice';

function App() {

  const [Task , setTask] = useState("");
  const [editId , setEditId] = useState(null);

  const dispatch = useDispatch();

  const todos = useSelector((state)=> state.todo.list);

  const handleAddOrUpdate = () => {
    if(Task.trim() === "") return;

    if(editId){
      dispatch(updateTodo({id : editId , text : Task }));
      setEditId(null);
    }
    else{
      dispatch(addTodo(Task));
    }
    setTask("");
  };

  const handleEditClick = (id,oldText) => {
    setEditId(id);
    setTask(oldText);
  }

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  return (
    <>
    {/* <div
      style={{
        minHeight: "50vh",
        backgroundColor: "#f1f5f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px", 
        minWidth: "700px",   }} > */}

      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          overflow: "hidden",}} >
            
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(to right, #4f46e5, #8b5cf6)",
            padding: "20px",
            textAlign: "center",
            color: "white",
            minWidth: "500px",
            }} >

          <h2 style={{ margin: 0 , minWidth: "500px" }}>Redux ToDo List</h2>
          <p style={{ marginTop: "6px", fontSize: "14px", color: "#e0e7ff" , minWidth: "500px" }}>
            Organize your daily tasks
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: "20px" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              value={Task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter Task..."
              style={{
                flex: 1,
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                outline: "none", }} />
       <button
              onClick={handleAddOrUpdate}
              style={{
                backgroundColor: editId ? "#16a34a" : "#4f46e5",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "8px 14px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              {editId ? "Save" : "Add"}
            </button>
          </div>

          {/* Task List */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginTop: "20px",
              maxHeight: "250px",
              overflowY: "auto", }} >

            {todos.map((t) => (
              <li
                key={t.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  marginBottom: "10px", }} >


                <span style={{ fontSize: "14px", color: "#374151" }}>
                  {t.text}
                </span>

                <div>
                  <button
                    onClick={() => handleEditClick(t.id, t.text)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#2563eb",
                      cursor: "pointer",
                      marginRight: "8px",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                  >
                    Update
                  </button>

                  <button
                    onClick={() => dispatch(deleteTodo(t.id))}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#dc2626",
                      cursor: "pointer",
                      fontSize: "13px",
                      fontWeight: "500", }} >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div
          style={{
            backgroundColor: "#f9fafb",
            textAlign: "center",
            fontSize: "12px",
            color: "#6b7280",
            padding: "10px",
            borderTop: "1px solid #e5e7eb", }} >
          Total Tasks: {todos.length}
        </div>
      </div>
    {/* </div> */}
    </>
  )
}

export default App
