import { describe, expect, it } from "vitest";
import { completeTask, createTask, type Task } from "./tasks.js";

describe("createTask", () => {
  it("creates an open task", () => {
    expect(createTask(1, "Learn TypeScript")).toEqual({
      id: 1,
      title: "Learn TypeScript",
      completed: false,
    });
  });

  it("trims surrounding whitespace", () => {
    expect(createTask(2, "  Review a pull request  ").title).toBe(
      "Review a pull request",
    );
  });

  it("rejects a blank title", () => {
    expect(() => createTask(3, "   ")).toThrow("Task title cannot be blank");
  });

  it("rejects a non-positive id", () => {
    expect(() => createTask(0, "Invalid task")).toThrow(
      "Task id must be a positive integer",
    );
  });
});

describe("completeTask", () => {
  it("marks the matching task complete without changing the original array", () => {
    const tasks: Task[] = [createTask(1, "Read the requirement")];
    const result = completeTask(tasks, 1);

    expect(result[0]?.completed).toBe(true);
    expect(tasks[0]?.completed).toBe(false);
  });

  it("leaves other tasks unchanged", () => {
    const tasks = [createTask(1, "First"), createTask(2, "Second")];
    const result = completeTask(tasks, 2);

    expect(result[0]?.completed).toBe(false);
    expect(result[1]?.completed).toBe(true);
  });
});
