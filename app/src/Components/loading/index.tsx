import React from 'react';
import ReactLoading from 'react-loading';
import './style.css';
import { useTranslation } from 'react-i18next';
const Loading: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <ReactLoading type="spin" color="#ffffff" height={100} width={100} />
      </div>
    </div>
  );
};

export default Loading;
