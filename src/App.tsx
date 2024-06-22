import styles from './App.module.css';
import {CreateButton} from './components/CreateButton';
import {Header} from './components/Header';
import {Input} from './components/Input';
import {EmptyList} from './components/List/EmptyList';
import {ListHeader} from './components/List/ListHeader';
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
        <div className={styles.inputWrapper}>
          <Input placeholder="Adicione uma nova tarefa" />
          <CreateButton />
        </div>

        <div>
          <ListHeader
            tasksLength={tasksLength}
            tasksCompleted={tasksCompleted}
          />

          {isEmptyList ? (
            <EmptyList />
          ) : (
            <div className={styles.taskListContent}>
              {tasks.map((task) => (
                <Task key={task.id} task={task} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
