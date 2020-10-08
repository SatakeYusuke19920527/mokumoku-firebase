import React from 'react';
import { addData } from '../lib/firebase';

const PageA: React.FC<{}> = () => {
  const firebaseAddData = async () => {
    await addData();
  };
  return (
    <div>
      <h1>PageA</h1>
      <button onClick={addData}>add_Data</button>
    </div>
  );
};

export default PageA;
