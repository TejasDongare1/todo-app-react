import React from 'react'
import "./ToDoCard.css"
import ImgDel from "./delete.png"
import toast, { Toaster } from 'react-hot-toast'


function ToDoCard({task, category, index, deleteItem}) {

 

  const CATEGORY_COLORS = {
    work: "#33cc33",
    shopping: "#3498db",
    learning: "#2ecc71",
    personal: "#ff0000",
    health: "#000",
    study: "#9933ff",
    others: "#666699"
  }

  return (
    <div className='todo-card'>
       <img src={ImgDel} alt="" srcset="" className='del-img' onClick={()=>{
        deleteItem(index)
        
       
       }} />
        {task}
        <span className='category' style={
          {
            backgroundColor: CATEGORY_COLORS[category],
            color: "white",
            borderRadius: "5px",
            padding: "2px 5px"
          }
        }>
       {CATEGORY_EMOJI_MAP[category]} {category}
        </span>
       <Toaster/>
    </div>
  )
}

export default ToDoCard