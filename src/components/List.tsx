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

      {isEmptyList ? <EmptyList /> : <div className={styles.listContent}></div>}
    </div>
  );
}
