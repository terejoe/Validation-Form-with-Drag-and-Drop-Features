import React, {useEffect, useState} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'


export default function Tasks({data, deleteTask}) {
  const [weeklyTasks, setWeeklyTasks] = useState(data)
  const [dailyTasks, setDailyTasks] = useState([])

  useEffect(() => {
    setWeeklyTasks(data)
  }, [data])
  
  
  const handleOnDragEnd = result => {
    const {source, destination} = result;

    if(!result.destination) return;
    if(source.droppableId === destination.droppableId){
      if(source.droppableId === "tasket"){
        let tasks = Array.from(weeklyTasks);
        const [recordedItem] = tasks.splice(result.source.index, 1);
        tasks.splice(destination.index, 0, recordedItem);
        setWeeklyTasks(tasks)
      }else {
        let tempDailyTasks = Array.from(dailyTasks);
        const [recordedItem] =tempDailyTasks.splice(result.source.index, 1);
        tempDailyTasks.splice(destination.index, 0, recordedItem);
        setDailyTasks(tempDailyTasks)
      }
    } else {
      let tasks = weeklyTasks;
      let tempDailyTasks = dailyTasks;
    
      if(source.droppableId === "tasket"){
        const [removed] = tasks.splice(source.index, 1);
        tempDailyTasks.splice(destination.index, 0, removed);
        setWeeklyTasks(tasks)
        setDailyTasks(tempDailyTasks)
      }else {
        const [removed] = tempDailyTasks.splice(source.index, 1);
        tasks.splice(destination.index, 0, removed);
        setWeeklyTasks(tasks)
        setDailyTasks(tempDailyTasks)
      }
   } 
  }
  return (
    <div className='tasker'>
      <DragDropContext onDragEnd= {handleOnDragEnd}>
       <div className='container'>
        <Droppable droppableId='tasket'>
          {(provided) => (
            <div className='weekly box' {...provided.droppableProps} ref = {provided.innerRef}>
              <h3 className='title'>Weekly Tasks</h3>
              <div className='scroll'>
                {data.map(({id, name, time_created, scrumgoalhistory_set}, index) => {

                return(
                  <Draggable key = {id} draggableId ={id.toString()} index = {index}>
                    {(provided) => (
                      <p className='task' ref = {provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} onClick ={() => {deleteTask(id)}}>
                        {name}
                        <div>{time_created.slice(0, 10)} at {time_created.slice(12,16)}</div>
                        <div className="blue">
                          {scrumgoalhistory_set.map(({id, done_by}) => {
                            return (
                              <p key = {id}>{done_by}</p>
                            )
                          })}
                        </div>
                      </p>
                      
                    )}
                  </Draggable>
                  
                )
               })}
              </div>
            {provided.placeholder}
           </div>
          )}
          
        </Droppable>
          
        <Droppable droppableId='tasketer'>
          {(provided) => (
            <div className='daily box' {...provided.droppableProps} ref = {provided.innerRef}>
              <h3 className='title'>Daily Target</h3>
              {dailyTasks.map(({id, name}, index) => {
                return(

                  <Draggable key = {id} draggableId ={id.toString()} index = {index}>
                    {(provided) => (
                      <p className='task' ref = {provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {name}
                        
                      </p>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>

      </DragDropContext>
    </div>
  )
}
