import {PlusCircle} from 'phosphor-react';

import {Header} from './components/Header';
import {Input} from './components/Input';
import {ListHeader} from './components/List/ListHeader';
import {EmptyList} from './components/List/EmptyList';
import {Task} from './components/List/Task';
import {useTaskList} from './hooks/useTaskList';
import styles from './App.module.css';

// TODO: Responsiveness
// TODO: i18n

function App() {
  const {
    tasks,
    newTaskName,
    tasksLength,
    tasksCompleted,
    isEmptyList,
    onToggleCheckTask,
    onDeleteTask,
    handleCreateNewTask,
    handleChangeNewTaskName,
    handleNewTaskNameInvalid,
  } = useTaskList();

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
