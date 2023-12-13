import React, { useState } from "react";
export default function Tasks({ mob }) {
  console.log(mob);
  let [task, setTask] = useState("");
  let [tasks, setTasks] = useState([]);
  let changeTask = ({ target: { value } }) => {
    setTask(value);
  };
  let set = localStorage.setItem(JSON.stringify(`${mob}`), tasks);
  let getdata = localStorage.getItem(JSON.stringify(`${mob}`));
  console.log(getdata);

  let addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  let deleteTAsk = (index) => {
    let reamainingTasks = tasks.filter((t, i) => {
      return index !== i;
    });
    setTasks(reamainingTasks);
  };

  return (
    <section>
      <div>
        <input
          type="text"
          placeholder="Add Your Tasks"
          onChange={changeTask}
          value={task}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div>
        {tasks.map((t, i) => {
          return (
            <div key={i}>
              <span>{t}</span>

              <button
                onClick={() => {
                  deleteTAsk(i);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
