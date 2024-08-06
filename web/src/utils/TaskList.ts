import Task from "@/model/Task";

export const initialTasks: Task[] = [
  new Task(1, 'Initial Setup', 'Setup initial project', 'Intern', 1, false),
  new Task(2, 'Basic Introduction', 'Introduction to the project', 'Intern', 1, true),
  new Task(3, 'Basic Git', 'Learn basic Git commands.', 'Intern', 2, true),
  new Task(4, 'Git Collaboration', 'Collaborate on a Git repository.', 'Intern', 2, true),
  new Task(5, 'JavaScript Basics', 'Learn JavaScript fundamentals.', 'Intern', 3, true),
  new Task(6, 'JavaScript Project', 'Build a simple JavaScript project.', 'Intern', 3, true),
  new Task(7, 'API Introduction', 'Introduction to APIs.', 'Intern', 4, true),
  new Task(8, 'API Consumption', 'Consume an API in a project.', 'Intern', 4, true),
  new Task(9, 'Final Project', 'Complete the final project.', 'Intern', 5, true),
  new Task(10, 'Project Presentation', 'Present the final project.', 'Intern', 5, true),
];
