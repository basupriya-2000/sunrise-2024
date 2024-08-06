import Task from "@/model/Task";
import { initialTasks } from "@/utils/TaskList";

let tasks: Task[] = [...initialTasks];

export function initializeTasks(): void {
  tasks = [...initialTasks];
  tasks[0].completed = false; // Ensure the first task is active
}

export function getActiveTasks(): Task[] {
  return tasks.filter(task => !task.completed);
}

export function getCompletedTasks(): Task[] {
  return tasks.filter(task => task.completed);
}

export function getAllTasks(): Task[] {
  return tasks;
}

export function completeTask(taskTitle: string): void {
  const task = tasks.find(task => task.title === taskTitle);
  if (task) {
    task.completed = true;
    const nextTaskIndex = tasks.findIndex(t => t.group === task.group + 1 && !t.completed);
    if (nextTaskIndex !== -1) {
      tasks[nextTaskIndex].completed = false; // Activate the next task in sequence
    }
  }
}

export function createTask(title: string, description: string, persona: string, group: number): void {
  const newTask = new Task(generateId(), title, description, persona, group, false);
  tasks.push(newTask);
}

export function updateTask(taskId: number, updatedTask: Partial<Omit<Task, 'id'>>): void {
  const index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...updatedTask };
  }
}

export function deleteTask(taskId: number): void {
  const index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

const generateId = (): number => {
  return Math.floor(Math.random() * 10000);
};