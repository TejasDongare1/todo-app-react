import React, { useState,useEffect } from 'react'
import "./Home.css"
import AddImg from "./add.png"
import ToDoCard from '../../components/ToDoCard/ToDoCard'
import toast, { Toaster } from 'react-hot-toast'
import Swal from 'sweetalert2'


function Home() {

  //    const todoList = [
  //         "go to gym",
  //         "buy Groceries",
  //         "go to school",
  //         "feed the cat",
  //         "make dinner",
  //         "read a book",
  //         "clean the house",
  //         "practice yoga",
  //         "go to the gym",
  //         "take a shower",
  //         "practice piano",
  //         "go for a walk",
  //         "learn a new language",
  //         "make a presentation",
  //         "make a video call",
  //         "practice guitar",
  //         "take a nap",
  //        


  //     ]
 

  useEffect(()=>{
    const savedTodoList = localStorage.getItem("todoList")
    if(savedTodoList){
      setTodoList(JSON.parse(savedTodoList))
    }
  },[])

  useEffect(()=>{
    if(todoList.length === 0) return

    localStorage.setItem("todoList", JSON.stringify(todoList))
  },[todoList])
  

  function deleteItem(index){

    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this task!",
      icon: 'warning',
      showCancelButton: true
    }).then((result)=>{
      if(!result.isConfirmed){
        return
      }
      const newTodoList = todoList.filter((item, i)=>{
        if( i == index){
          return false
        }
        else{
          return true
        }
      })
    
    setTodoList(newTodoList)
  })
  }

  return (
    <div>
      <h1 className='app-title'>ToDo List📒</h1>
      <div className="todo-list-container">
        {
          todoList.map((todoItem, i)=>{

            const {task, category} = todoItem

            return <ToDoCard key={i} task={task} category={category} index={i} deleteItem={deleteItem}/>

          })
        }

        {
          todoList.length === 0 ?
        <p className='para'>
          Please add a new task!!!
        </p>:null
}
      </div>

      <div className="input-add-container">
        <input type="text"
          placeholder="Add a new task..."
          className='input-box'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} />



        <img src={AddImg}
          alt=""
          srcset=""
          className='add-img'
          onClick={() => {
            if(newTask === ""){
             toast.error("Task cannot be empty!!")
             return
            }
            if(category === ""){
              toast.error("Category cannot be empty!!")
              return
            }

            setTodoList([...todoList, {task:newTask, category:category}])
            setNewTask("")
            toast.success("Task added Successfully!!")
          }
          } />
      </div>
      <select name="" id="" 
      className='category-select' 
      value={category}
      onChange={(e)=>{
        setCategory(e.target.value)
      }}>
        <option value="">Category</option>
        <option value="learning">Learning</option>
        <option value="work">Work</option>
        <option value="shopping">Shopping</option>
        <option value="health">Health</option>
        <option value="personal">Personal</option>
        <option value="others">Others</option>
      </select>
      <Toaster />
    </div>
  )
}

export default Home