import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './TaskBoard.module.css';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'active' | 'completed';
}

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState<{ toDo: Task[]; inProgress: Task[]; completed: Task[] }>({
    toDo: [],
    inProgress: [],
    completed: [],
  });

  const fetchTasks = async () => {
    const response = await axios.get('/api/tasks');
    const allTasks: Task[] = response.data;
    const toDo = allTasks.filter(task => task.status === 'pending');
    const inProgress = allTasks.filter(task => task.status === 'active');
    const completed = allTasks.filter(task => task.status === 'completed');
    setTasks({ toDo, inProgress, completed });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className={styles.taskboard}>
      <div className={styles.header}>
        <h1>Taskboard</h1>
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h2>To-Do {tasks.toDo.length}</h2>
          {tasks.toDo.map(task => (
            <div key={task.id} className={styles.taskCard}>
              <h3>{`Task ${task.id}`}</h3>
              <p>{task.title}</p>
              <p>{task.description}</p>
              <button className={styles.deleteButton}>Delete</button>
              <button className={styles.editButton}>Edit</button>
            </div>
          ))}
        </div>
        <div className={styles.column}>
          <h2>In Progress {tasks.inProgress.length}</h2>
          {tasks.inProgress.map(task => (
            <div key={task.id} className={styles.taskCard}>
              <h3>{`Task ${task.id}`}</h3>
              <p>{task.title}</p>
              <p>{task.description}</p>
              <button className={styles.deleteButton}>Delete</button>
              <button className={styles.editButton}>Edit</button>
            </div>
          ))}
        </div>
        <div className={styles.column}>
          <h2>Completed {tasks.completed.length}</h2>
          {tasks.completed.map(task => (
            <div key={task.id} className={styles.taskCard}>
              <h3>{`Task ${task.id}`}</h3>
              <p>{task.title}</p>
              <p>{task.description}</p>
              <button className={styles.deleteButton}>Delete</button>
              <button className={styles.editButton}>Edit</button>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.addButton}>+</button>
    </div>
  );
};

export default TaskBoard;
