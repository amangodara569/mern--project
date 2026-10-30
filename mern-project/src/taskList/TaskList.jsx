import React from 'react'
import NewTask from 'taskList/NewTask'

const TaskList = () => {
  return (
    // will import all tasklist folder components here and import this in employeeDashboard
    <div className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-no'>
      <div className=' flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>

      </div>

      <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>

      </div>

      <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>

      </div>

      <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>

      </div>
       

    </div>
  
  )
}

export default TaskList