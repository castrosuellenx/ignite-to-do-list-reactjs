import {useTranslation} from 'react-i18next';

import styles from './LanguageSwitch.module.css';

export function LanguageSwitch() {
  const {i18n} = useTranslation();

  return (
    <div className={styles.container}>
      <button
        type="button"
        title="English"
        onClick={() => i18n.changeLanguage('en')}
      >
        <img src="./usa-flag.png" alt="USA Flag" />
      </button>

      <button
        type="button"
        title="Português Brasileiro"
        onClick={() => i18n.changeLanguage('pt')}
      >
        <img src="./brazil-flag.png" alt="Brazil Flag" />
      </button>
    </div>
  );
}
