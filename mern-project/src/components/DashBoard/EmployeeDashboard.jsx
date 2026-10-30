import TaskList from "../../taskList/TaskList"
import Header from "../other/Header"
import TaskListNumber from "../other/TaskListNumber"

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
        <Header/>
        <TaskListNumber/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard