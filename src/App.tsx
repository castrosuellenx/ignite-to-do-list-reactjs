import {PlusCircle} from 'phosphor-react';

import styles from './App.module.css';
import {Header} from './components/Header';
import {Input} from './components/Input';
import {ListHeader} from './components/List/ListHeader';
import {EmptyList} from './components/List/EmptyList';
import {Task, type TaskType} from './components/List/Task';

const tasks: TaskType[] = [
  {
    id: '1',
    description: 'Lorem ipsum dolor sit amet.',
    isCompleted: false,
  },
  {
    id: '2',
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: false,
  },
  {
    id: '3',
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: true,
  },
  {
    id: '4',
    description:
      'Lorem ipsum dolor sit amet. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: false,
  },
];

function App() {
  const tasksLength = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;
  const isEmptyList = tasksLength === 0;

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <form className={styles.formWrapper}>
          <Input placeholder="Add a new task" aria-label="Task name" />

          <button
            className={styles.createButton}
            type="submit"
            aria-label="Create new task"
          >
            Create <PlusCircle size={18} />
          </button>
        </form>

        <section>
          <ListHeader
            tasksLength={tasksLength}
            tasksCompleted={tasksCompleted}
          />

          {isEmptyList ? (
            <EmptyList />
          ) : (
            <ul className={styles.taskListWrapper}>
              {tasks.map((task) => (
                <Task key={task.id} task={task} />
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
