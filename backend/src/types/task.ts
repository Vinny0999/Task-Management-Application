import { z } from 'zod';

// Zod schema for task validation
export const TaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string(),
  status: z.enum(["pending", "done"]).default("pending")
});

export const TaskUpdateSchema = z.object({
  status: z.enum(["pending", "done"])
});

// TypeScript types derived from Zod schema
export type TaskInput = z.infer<typeof TaskSchema>;
export type TaskUpdateInput = z.infer<typeof TaskUpdateSchema>;

export interface Task extends TaskInput {
  id: string;
}