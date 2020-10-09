import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import {
  addData,
  deleteData,
  readData,
  realTimeReadData,
} from '../lib/firebase';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const PageA: React.FC<{}> = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [country, setCountry] = useState<string>('');
  const [users, setUsers] = useState<any>([]);
  const [isFin, setIsFin] = useState<boolean>(false);

  useEffect(() => {
    firebaseReadData();
  }, []);

  const firebaseAddData = async () => {
    setIsFin(true);
    const trueOrFalse = await addData(name, age, country);
    setIsFin(trueOrFalse);
    firebaseRealTimeUpdate();
  };

  const firebaseRealTimeUpdate = async () => {
    const UpUsers = await realTimeReadData();

    console.log(UpUsers, 'update data');
  };

  const firebaseDeleteData = async () => {
    setIsFin(true);
    const trueOrFalse = await deleteData(name);
    setIsFin(trueOrFalse);
  };
  const firebaseReadData = async () => {
    const usersData = await readData();
    setUsers(usersData);
  };

  return (
    <div>
      <h1>PageA</h1>
      <div style={{ display: isFin ? 'block' : 'none' }}>
        <CircularProgress />
      </div>
      <TextField label="Name" onChange={(e) => setName(e.target.value)} />
      <TextField
        label="Age"
        onChange={(e) => setAge(parseInt(e.target.value))}
      />
      <TextField label="Country" onChange={(e) => setCountry(e.target.value)} />
      <Button variant="contained" color="primary" onClick={firebaseAddData}>
        ADD_DATA
      </Button>
      <Button variant="contained" color="primary" onClick={firebaseDeleteData}>
        DELETE_DATA
      </Button>
      <Button variant="contained" color="primary" onClick={firebaseReadData}>
        READ_DATA
      </Button>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>age</td>
            <td>country</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any, index: any) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.country}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PageA;
