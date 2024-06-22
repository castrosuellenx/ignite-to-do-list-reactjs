import styles from './ListHeader.module.css';

type Props = {
  tasksLength: number;
  tasksCompleted: number;
};

export function ListHeader({tasksLength, tasksCompleted}: Props) {
  return (
    <div className={styles.container}>
      <aside>
        <p>
          Tarefas criadas <span>{tasksLength}</span>
        </p>
      </aside>

      <aside>
        <p>
          Concluídas{' '}
          <span>
            {tasksCompleted > 0
              ? `${tasksCompleted} de ${tasksLength}`
              : tasksCompleted}
          </span>
        </p>
      </aside>
    </div>
  );
}
