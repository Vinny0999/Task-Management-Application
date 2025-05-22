import express from 'express';
import { taskService } from '../services/taskService';
import { TaskSchema, TaskUpdateSchema } from '../types/task';

const router = express.Router();

// GET /tasks - Get all tasks
router.get('/', (req, res) => {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
});

// POST /tasks - Create a new task
router.post('/', (req, res) => {
  try {
    const validatedData = TaskSchema.parse(req.body);
    const newTask = taskService.createTask(validatedData);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: "Invalid task data" });
  }
});

// DELETE /tasks/:id - Delete a task
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleted = taskService.deleteTask(id);
  
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

// PATCH /tasks/:id - Update task status
router.patch('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const validatedData = TaskUpdateSchema.parse(req.body);
    
    const updatedTask = taskService.updateTaskStatus(id, validatedData);
    
    if (updatedTask) {
      res.json(updatedTask);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid update data" });
  }
});

export default router;