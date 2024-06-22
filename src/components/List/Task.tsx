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
    <div className={styles.taskContainer}>
      {task.isCompleted ? (
        <button
          className={styles.taskCheckbox}
          type="button"
          title="Marcar tarefa"
        >
          <CheckCircle size={20} weight="fill" />
        </button>
      ) : (
        <button
          className={styles.taskCheckboxCompleted}
          type="button"
          title="Desmarcar tarefa"
        >
          <Circle size={20} />
        </button>
      )}

      <p className={styles.taskDescription}>{task.description}</p>

      <button
        className={styles.taskTrashButton}
        type="button"
        title="Deletar tarefa"
      >
        <Trash size={16} weight="bold" color="var(--gray-300)" />
      </button>
    </div>
  );
}
