import {useTranslation} from 'react-i18next';
import styles from './ListHeader.module.css';

type Props = {
  tasksLength: number;
  tasksCompleted: number;
};

export function ListHeader({tasksLength, tasksCompleted}: Props) {
  const {t} = useTranslation();

  return (
    <section className={styles.container} aria-live="polite">
      <p>
        {t('listHeader.createdTasks')} <span>{tasksLength}</span>
      </p>

      <p>
        {t('listHeader.done')}{' '}
        <span>
          {tasksCompleted > 0
            ? `${tasksCompleted} ${t('listHeader.of')} ${tasksLength}`
            : tasksCompleted}
        </span>
      </p>
    </section>
  );
}
