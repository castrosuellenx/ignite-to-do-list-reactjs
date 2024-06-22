import styles from './EmptyList.module.css';

export function EmptyList() {
  return (
    <section className={styles.container}>
      <img
        src="./clipboard.png"
        alt="Clipboard icon illustrating empty task list"
      />
      <p>
        <strong>You don't have any tasks registered</strong>
        <br />
        <span>Create tasks and organize your to-do items</span>
      </p>
    </section>
  );
}
