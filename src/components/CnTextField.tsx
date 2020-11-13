import React from 'react';
import TextField from '@material-ui/core/TextField';
import { TextAreaType } from '../types/TextAreaType';

const CnTextField: React.FC<TextAreaType> = ({label, onChange}) => {  
  return (
    <div style={{display: 'block'}}>
      <TextField label={label} variant="outlined" size="small" onChange={onChange} />
    </div>
  );
}

export default CnTextField
