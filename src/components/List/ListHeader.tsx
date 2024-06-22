import styles from './ListHeader.module.css';

type Props = {
  tasksLength: number;
  tasksCompleted: number;
};

export function ListHeader({tasksLength, tasksCompleted}: Props) {
  return (
    <section className={styles.container} aria-live="polite">
      <p>
        Created tasks <span>{tasksLength}</span>
      </p>

      <p>
        Done{' '}
        <span>
          {tasksCompleted > 0
            ? `${tasksCompleted} of ${tasksLength}`
            : tasksCompleted}
        </span>
      </p>
    </section>
  );
}
