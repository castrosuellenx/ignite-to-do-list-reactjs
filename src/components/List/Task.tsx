import {CheckCircle, Circle, Trash} from 'phosphor-react';

import styles from './Task.module.css';

export type TaskType = {
  id: string;
  description: string;
  isCompleted: boolean;
};

type Props = {
  task: TaskType;
};

export function Task({task}: Props) {
  return (
    <div className={styles.container}>
      <button
        className={task.isCompleted ? styles.checkboxChecked : styles.checkbox}
        type="button"
        title={task.isCompleted ? 'Uncheck task' : 'Check task'}
      >
        {task.isCompleted ? (
          <Circle size={20} />
        ) : (
          <CheckCircle size={20} weight="fill" />
        )}
      </button>

      <p className={styles.taskDescription}>{task.description}</p>

      <button className={styles.trashButton} type="button" title="Delete task">
        <Trash size={16} weight="bold" />
      </button>
    </div>
  );
}
