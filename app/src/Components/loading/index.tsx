import React from 'react';
import ReactLoading from 'react-loading';
import './style.css';
const Loading: React.FC = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <ReactLoading type="spin" color="#ffffff" height={50} width={50} />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
