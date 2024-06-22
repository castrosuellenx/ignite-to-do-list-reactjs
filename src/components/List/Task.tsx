import {Check, Trash} from 'phosphor-react';

import styles from './Task.module.css';

export type TaskType = {
  id: string;
  description: string;
  isCompleted: boolean;
};

type Props = {
  task: TaskType;
  toggleCheckTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
};

export function Task({task, toggleCheckTask, deleteTask}: Props) {
  const checkboxClassName = `${styles.checkbox} ${
    task.isCompleted ? styles.checkboxChecked : styles.checkboxUnchecked
  }`;

  const descriptionClassName = `${styles.description} ${
    task.isCompleted ? styles.descriptionChecked : ''
  }`;

  function handleToggleCheckTask() {
    toggleCheckTask(task.id);
  }

  function handleDeleteTask() {
    deleteTask(task.id);
  }

  return (
    <li className={styles.container} role="listitem">
      <button
        className={checkboxClassName}
        type="button"
        title={task.isCompleted ? 'Uncheck task' : 'Check task'}
        aria-label={task.isCompleted ? 'Uncheck task' : 'Check task'}
        onClick={handleToggleCheckTask}
      >
        {task.isCompleted ? <Check size={12} weight="bold" /> : null}
      </button>

      <p className={descriptionClassName}>{task.description}</p>

      <button
        className={styles.trashButton}
        type="button"
        title="Delete task"
        aria-label="Delete task"
        onClick={handleDeleteTask}
      >
        <Trash size={16} weight="bold" />
      </button>
    </li>
  );
}
