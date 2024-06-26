import {useTranslation} from 'react-i18next';

import styles from './Header.module.css';
import {RocketIcon} from './RocketIcon';
import {LanguageSwitch} from './LanguageSwitch';

export function Header() {
  const {t} = useTranslation();

  return (
    <header className={styles.header} aria-label={t('header.ariaLabel')}>
      <LanguageSwitch />
      <RocketIcon width="1.375rem" height="2.25rem" />
      <h1 className={styles.title}>
        <span>{t('header.title.part1')}</span>
        <span>{t('header.title.part2')}</span>
      </h1>
    </header>
  );
}
