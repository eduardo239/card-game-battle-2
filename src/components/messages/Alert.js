import React from 'react';
import { ReactComponent as ExIcon } from '../../assets/uil_exclamation-circle.svg';
import { ReactComponent as CkIcon } from '../../assets/uil_check-circle.svg';

const Alert = ({ type, message }) => {
  const messageType =
    type === 'danger' ? 'danger' : type === 'success' ? 'success' : 'info';

  return (
    <div className={`alert alert-${messageType}`}>
      {(type === 'danger' || type === 'info') && <ExIcon />}
      {type === 'success' && <CkIcon />}

      {message}
    </div>
  );
};

export default Alert;
