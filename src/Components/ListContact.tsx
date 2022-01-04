import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

const ListContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [details, setDetails] = useState<any>([]);

  useEffect(() => {
    getUser();
  }, []);
  function getUser() {
    axios
      .get('https://61d03a49cd2ee50017cc9801.mockapi.io/Crud')
      .then((res) => {
        console.log(res.data);

        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  let save = (e: any) => {
    e.preventDefault();
    axios
      .post('https://61d03a49cd2ee50017cc9801.mockapi.io/Crud', {
        name: name,
        number: number,
      })
      .then(() => {
        getUser();
      });
    setName('');
    setNumber('');
  };
  let updateData = (data: any) => {
    // console.log(data);
    axios
      .put(`https://61d03a49cd2ee50017cc9801.mockapi.io/Crud/${data.id}`, {
        name: 'Patkar',
      })
      .then(() => {
        getUser();
      });
  };
  let deleteData = (data: any) => {
    axios
      .delete(`https://61d03a49cd2ee50017cc9801.mockapi.io/Crud/${data.id}`)
      .then(() => {
        getUser();
      });
  };
  return (
    <div>
      <h1>ADD NEW CONTACT</h1>
      <form action="" onSubmit={save}>
        <input
          type="text"
          placeholder="Enter the name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter the mobile number"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <br />
        <button>SAVE</button>
      </form>
      <br />

      <h1>My Contact Details </h1>
      {details.map((data: any) => (
        <div key={data.id}>
          <div>{data.name} </div>
          <div>{data.number}</div>
          <button onClick={() => updateData(data)}>Edit</button>
          <button onClick={() => deleteData(data)}>Delete</button>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default ListContact;
