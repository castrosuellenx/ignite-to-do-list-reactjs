import {CheckCircle, Circle, Trash} from 'phosphor-react';
import {EmptyList} from './EmptyList';
import styles from './List.module.css';
import {ListHeader} from './ListHeader';

export type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

type Props = {
  tasks: Task[];
};

export function List({tasks}: Props) {
  const tasksLength = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;
  const isEmptyList = tasksLength === 0;

  return (
    <div>
      <ListHeader tasksLength={tasksLength} tasksCompleted={tasksCompleted} />

      {isEmptyList ? (
        <EmptyList />
      ) : (
        <div className={styles.content}>
          {tasks.map((task) => (
            <div className={styles.taskContainer} key={task.id}>
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
          ))}
        </div>
      )}
    </div>
  );
}
