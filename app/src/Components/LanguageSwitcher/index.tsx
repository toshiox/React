import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedIndex] = useState(0);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const handleSelectedIndexChange = (language: string) => {
    changeLanguage(language);
  };

  return (
    <div>
      <div>
        <p>Selected Index: {selectedIndex}</p>
        <button onClick={() => handleSelectedIndexChange('en')}>English</button>
        <button onClick={() => handleSelectedIndexChange('pt')}>Portugues</button>
      </div>
    </div>
  );
}

export default LanguageSwitcher;