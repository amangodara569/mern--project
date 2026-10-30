import React from "react";

const TaskListNumber = () => {
  return (
    <div>
      {/* for new task */}
      <div>

        <div>
          {/* to represent number */}
          <h2>0</h2>
        </div>

        <div>
          <h3> new task</h3>
        </div>

      </div>

      {/* for completed task */}
      <div>

        <div>
          <h2>0</h2>
        </div>

        <div>
          <h3>task completed</h3>
        </div>

      </div>

      {/* for accepted */}
      <div>

        <div>
          <h2>0</h2>
        </div>

        <div>
          <h3>task accepted</h3>
        </div>

      </div>

      {/* for failed tasks */}
      <div>

        <div>
          <h2>0</h2>
        </div>

        <div>
          <h2>task failed</h2>
        </div>
        
      </div>
    </div>
  );
};

export default TaskListNumber;
