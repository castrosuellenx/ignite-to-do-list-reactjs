import styles from './List.module.css';

export function List() {
  const tasksLength = 0;
  const tasksCompleted = 0;

  return (
    <div>
      <div className={styles.listHeader}>
        <aside>
          <p>
            Tarefas criadas <span>{tasksLength}</span>
          </p>
        </aside>

        <aside>
          <p>
            Concluídas <span>{tasksCompleted}</span>
          </p>
        </aside>
      </div>

      <div className={styles.emptyListContent}>
        <img src="./clipboard.png" alt="" />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <br />
          <span>Crie tarefas e organize seus itens a fazer</span>
        </p>
      </div>
    </div>
  );
}
