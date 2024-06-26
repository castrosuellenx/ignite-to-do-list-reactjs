import {useTranslation} from 'react-i18next';

import styles from './LanguageSwitch.module.css';

export function LanguageSwitch() {
  const {i18n, t} = useTranslation();

  return (
    <div className={styles.container}>
      <button
        type="button"
        title={t('languageSwitch.titleEn')}
        aria-label={t('languageSwitch.ariaLabelEn')}
        onClick={() => i18n.changeLanguage('en')}
      >
        <img src="./usa-flag.png" alt={t('languageSwitch.altEn')} />
      </button>

      <button
        type="button"
        title={t('languageSwitch.titlePt')}
        aria-label={t('languageSwitch.ariaLabelPt')}
        onClick={() => i18n.changeLanguage('pt')}
      >
        <img src="./brazil-flag.png" alt={t('languageSwitch.altPt')} />
      </button>
    </div>
  );
}
