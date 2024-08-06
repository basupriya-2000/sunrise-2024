import { NextApiRequest, NextApiResponse } from 'next';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'active' | 'completed';
}

let tasks: Task[] = [
  { id: 1, title: 'Initial Setup', description: 'Set up the development environment.', status: 'active' },
  { id: 2, title: 'Basic Introduction', description: 'Complete the introductory module.', status: 'active' },
  { id: 3, title: 'Basic Git', description: 'Learn basic Git commands.', status: 'pending' },
  { id: 4, title: 'Git Collaboration', description: 'Collaborate on a Git repository.', status: 'pending' },
  { id: 5, title: 'JavaScript Basics', description: 'Complete JavaScript basics tutorial.', status: 'pending' },
  { id: 6, title: 'JavaScript Project', description: 'Create a small JavaScript project.', status: 'pending' },
  { id: 7, title: 'API Introduction', description: 'Learn about RESTful APIs.', status: 'pending' },
  { id: 8, title: 'API Consumption', description: 'Consume an API in a project.', status: 'pending' },
  { id: 9, title: 'Final Project', description: 'Complete the final project.', status: 'pending' },
  { id: 10, title: 'Project Presentation', description: 'Present the final project.', status: 'pending' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(tasks);
  } else if (req.method === 'POST') {
    const { title, description, status } = req.body;
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      description,
      status: status || 'pending',
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
