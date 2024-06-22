import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export type TaskType = {
  id: string;
  description: string;
  isCompleted: boolean;
};

export function useTaskList() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTaskName, setNewTaskName] = useState('');

  const tasksLength = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;
  const isEmptyList = tasksLength === 0;

  function onToggleCheckTask(taskId: string) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === taskId ? {...task, isCompleted: !task.isCompleted} : task
      )
    );
  }

  function onDeleteTask(taskId: string) {
    setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
  }

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault();

    const newTask: TaskType = {
      id: uuidv4(),
      description: newTaskName,
      isCompleted: false,
    };

    setTasks((prevState) => [...prevState, newTask]);
    setNewTaskName('');
  }

  function handleChangeNewTaskName(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskName(event.target.value);
  }

  function handleNewTaskNameInvalid(
    event: React.InvalidEvent<HTMLInputElement>
  ) {
    event.target.setCustomValidity("Task name can't be empty");
  }

  return {
    tasks,
    newTaskName,
    tasksLength,
    tasksCompleted,
    isEmptyList,
    onToggleCheckTask,
    onDeleteTask,
    handleCreateNewTask,
    handleChangeNewTaskName,
    handleNewTaskNameInvalid,
  };
}
