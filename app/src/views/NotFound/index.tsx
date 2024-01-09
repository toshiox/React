import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('PageNotFound.Message')}</h2>
    </div>
  );
};

export default NotFound;
