import {Check, Trash} from 'phosphor-react';
import {useTranslation} from 'react-i18next';

import {TaskType} from '../../hooks/useTaskList';
import styles from './Task.module.css';

type Props = {
  task: TaskType;
  toggleCheckTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
};

export function Task({task, toggleCheckTask, deleteTask}: Props) {
  const {t} = useTranslation();

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
        title={task.isCompleted ? t('task.uncheckTask') : t('task.checkTask')}
        aria-label={
          task.isCompleted ? t('task.uncheckTask') : t('task.checkTask')
        }
        onClick={handleToggleCheckTask}
      >
        {task.isCompleted ? <Check size={12} weight="bold" /> : null}
      </button>

      <p className={descriptionClassName}>{task.description}</p>

      <button
        className={styles.trashButton}
        type="button"
        title={t('task.deleteTask')}
        aria-label={t('task.deleteTask')}
        onClick={handleDeleteTask}
      >
        <Trash size={16} weight="bold" />
      </button>
    </li>
  );
}
