import {useState} from 'react';
import {PlusCircle} from 'phosphor-react';
import {v4 as uuidv4} from 'uuid';

import styles from './App.module.css';
import {Header} from './components/Header';
import {Input} from './components/Input';
import {ListHeader} from './components/List/ListHeader';
import {EmptyList} from './components/List/EmptyList';
import {Task, type TaskType} from './components/List/Task';

// TODO: Move all logic to a custom hook
// TODO: Responsiveness
// TODO: i18n

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTaskName, setNewTaskName] = useState('');

  const tasksLength = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;
  const isEmptyList = tasksLength === 0;

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault();

    const newTask: TaskType = {
      id: uuidv4(),
      description: newTaskName,
      isCompleted: false,
    };

    setTasks((prevState) => [...prevState, newTask]);
    setNewTaskName('');
  }

  function handleChangeNewTaskName(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskName(event.target.value);
  }

  function handleNewTaskNameInvalid(
    event: React.InvalidEvent<HTMLInputElement>
  ) {
    event.target.setCustomValidity("Task name can't be empty");
  }

  function onToggleCheckTask(taskId: string) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === taskId ? {...task, isCompleted: !task.isCompleted} : task
      )
    );
  }

  function onDeleteTask(taskId: string) {
    setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
  }

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <form className={styles.formWrapper} onSubmit={handleCreateNewTask}>
          <Input
            placeholder="Add a new task"
            aria-label="Task name"
            value={newTaskName}
            required
            onChange={handleChangeNewTaskName}
            onInvalid={handleNewTaskNameInvalid}
          />

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
                <Task
                  key={task.id}
                  task={task}
                  toggleCheckTask={onToggleCheckTask}
                  deleteTask={onDeleteTask}
                />
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
