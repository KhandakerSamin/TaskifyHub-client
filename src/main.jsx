
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Routes';
import AuthProvider from './Provider/AuthProvider';
import { DragDropContext } from 'react-beautiful-dnd';

const onDragEnd = (result) =>{
  const {source, destination} = result 
  console.log(result);
  if(!destination){
    return 
  }
  if(destination.droppableId === source.droppableId &&
    destination.index === source.index) return ;

    let add,
    active = todos,
    onGoing = onGoingR, 
    complete = completed;

    if(source.droppableId === 'TodoList'){
      add = active[source.index];
      active.splice(source.index, 1)
    }else if (source.droppableId === 'OnGoingList'){
      add = onGoing[source.index];
      onGoing.splice(source.index, 1) 
    }else{
      add = complete[source.index];
      complete.splice(source.index ,1);
    }

}


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <DragDropContext onDragEnd={onDragEnd}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </DragDropContext>
  </AuthProvider>
)