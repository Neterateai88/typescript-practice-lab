export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export function createTask(id: number, title: string): Task {
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Task id must be a positive integer");
  }

  const normalizedTitle = title.trim();
  if (normalizedTitle.length === 0) {
    throw new Error("Task title cannot be blank");
  }

  return {
    id,
    title: normalizedTitle,
    completed: false,
  };
}

export function completeTask(tasks: readonly Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, completed: true } : task,
  );
}
