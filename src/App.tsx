import styles from './App.module.css';
import {CreateButton} from './components/CreateButton';
import {Header} from './components/Header';
import {Input} from './components/Input';
import {List, type Task} from './components/List';

const tasks: Task[] = [
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
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <div className={styles.inputWrapper}>
          <Input placeholder="Adicione uma nova tarefa" />
          <CreateButton />
        </div>

        <List tasks={tasks} />
      </main>
    </div>
  );
}

export default App;
