import React, { useState } from "react";
import "./select.css";

const SelectMultipleDiv = () => {
  const hotelList = [
    {
      name: "Port Blair",
      id: 1,
    },
    {
      name: "Swaraj Dweep",
      id: 2,
    },
    {
      name: "havelock",
      id: 3,
    },
    {
      name: "Ghandhi Bhawan",
      id: 4,
    },
    {
      name: "Ross Island",
      id: 5,
    },
    {
      name: "Rana Park",
      id: 6,
    },
    {
      name: "Cellular Jail",
      id: 7,
    },
  ];

  const [selectedTask, selectTask] = useState([]);

  const isSelected = (taskId) => {
    return selectedTask.filter((task) => task === taskId).length;
  };

  const toggleTask = (taskId) => {
    if (isSelected(taskId)) {
      // deselect div
      selectTask((tasks) => tasks.filter((ts) => ts !== taskId));
      console.log(taskId, "id here");
    } else if (selectedTask.length < 7) {
      // select div, max 7 div will be selected
      selectTask((tasks) => [...tasks, taskId]);
    }
  };

  console.log(selectedTask);

  return (
    <>
      {hotelList.map((task) => (
        <div
          className={`todoDiv${isSelected(task.id) ? " select" : ""}`}
          key={task.id}
          onClick={() => toggleTask(task)}
        >
          Task{task.name}
        </div>
      ))}
    </>
  );
};

export default SelectMultipleDiv;
