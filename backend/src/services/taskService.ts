import { Task, TaskInput, TaskUpdateInput } from '../types/task';
import { v4 as uuidv4 } from 'uuid';

// In-memory storage for tasks
let tasks: Task[] = [];

export const taskService = {
  getAllTasks: (): Task[] => {
    return tasks;
  },

  getTaskById: (id: string): Task | undefined => {
    return tasks.find(task => task.id === id);
  },

  createTask: (taskInput: TaskInput): Task => {
    const newTask: Task = {
      id: uuidv4(),
      ...taskInput
    };
    tasks.push(newTask);
    return newTask;
  },

  deleteTask: (id: string): boolean => {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    return tasks.length !== initialLength;
  },

  updateTaskStatus: (id: string, updateInput: TaskUpdateInput): Task | null => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) return null;
    
    tasks[taskIndex] = {
      ...tasks[taskIndex],
      ...updateInput
    };
    
    return tasks[taskIndex];
  }
};