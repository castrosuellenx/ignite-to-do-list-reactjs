import styles from './App.module.css';
import {CreateButton} from './components/CreateButton';
import {Header} from './components/Header';
import {Input} from './components/Input';
import {List} from './components/List';

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <div className={styles.inputWrapper}>
          <Input placeholder="Adicione uma nova tarefa" />
          <CreateButton />
        </div>

        <List />
      </main>
    </div>
  );
}

export default App;
