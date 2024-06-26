import styles from './Header.module.css';
import {RocketIcon} from './RocketIcon';
import {LanguageSwitch} from './LanguageSwitch';

export function Header() {
  return (
    <header className={styles.header} aria-label="To Do List Header">
      <LanguageSwitch />
      <RocketIcon width="1.375rem" height="2.25rem" />
      <h1 className={styles.title}>
        <span>to</span>
        <span>do</span>
      </h1>
    </header>
  );
}
