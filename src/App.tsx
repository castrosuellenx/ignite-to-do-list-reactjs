import {useTranslation} from 'react-i18next';
import {PlusCircle} from 'phosphor-react';

import {useTaskList} from './hooks/useTaskList';
import {Header} from './components/Header';
import {Input} from './components/Input';
import {ListHeader} from './components/List/ListHeader';
import {EmptyList} from './components/List/EmptyList';
import {Task} from './components/List/Task';
import styles from './App.module.css';

function App() {
  const {t} = useTranslation();

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
            placeholder={t('form.taskNameInput.placeholder')}
            aria-label={t('form.taskNameInput.ariaLabel')}
            value={newTaskName}
            required
            onChange={handleChangeNewTaskName}
            onInvalid={handleNewTaskNameInvalid}
          />

          <button
            className={styles.createButton}
            type="submit"
            title={t('form.createButton.title')}
            aria-label={t('form.createButton.ariaLabel')}
          >
            {t('form.createButton.text')} <PlusCircle size={18} />
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
