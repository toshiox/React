import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const handleSelectedIndexChange = (language: string) => {
    changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleSelectedIndexChange('en')}>English</button>
      <button onClick={() => handleSelectedIndexChange('pt')}>Portugues</button>
    </div>
  );
}

export default LanguageSwitcher;