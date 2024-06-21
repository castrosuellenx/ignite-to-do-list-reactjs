import styles from './EmptyList.module.css';

export function EmptyList() {
  return (
    <div className={styles.container}>
      <img src="./clipboard.png" alt="" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  );
}
