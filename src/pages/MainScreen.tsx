import React, { useEffect } from 'react';
import { authState } from '../lib/firebase';
import CnHeader from '../components/CnHeader';
import CnSidebar from '../components/CnSidebar';

const MainScreen: React.FC<{}> = () => {
  useEffect(() => {
    fbUserState()
  }, [])
  
  const fbUserState = async () => {
    console.log('fbUserState')
    await authState()
  }

  return (
    <div>
      <CnHeader />
      <div>
        <CnSidebar />
        <h1>PageA</h1>
      </div>
    </div>
  );
};

export default MainScreen;
