import React from 'react';
import Button from '@material-ui/core/Button';
import { ButtonType } from '../types/ButtonType';

const CnButton: React.FC<ButtonType> = ({buttonName, onClick}) => {
  return (
    <Button variant="contained" onClick={onClick}>{buttonName}</Button>
  );
}

export default CnButton