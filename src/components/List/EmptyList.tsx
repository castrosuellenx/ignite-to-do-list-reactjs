import {useTranslation} from 'react-i18next';

import styles from './EmptyList.module.css';

export function EmptyList() {
  const {t} = useTranslation();

  return (
    <section className={styles.container}>
      <img src="./clipboard.png" alt={t('emptyList.clipboardAlt')} />
      <p>
        <strong>{t('emptyList.title')}</strong>
        <br />
        <span>{t('emptyList.description')}</span>
      </p>
    </section>
  );
}
