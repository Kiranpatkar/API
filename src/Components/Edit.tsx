import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Edit = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  let save = (e: any) => {
    e.preventDefault();
    axios.put('https://61d03a49cd2ee50017cc9801.mockapi.io/Crud', {
      name: name,
      number: number,
    });
    setName('');
    setNumber('');
  };
  return (
    <div>
      <h1>Edit CONTACT</h1>
      <form action="" onSubmit={save}>
        <input
          type="text"
          placeholder="Enter the name"
          required
          // value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter the mobile number"
          required
          // value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <br />
        <button>SAVE</button>
      </form>
    </div>
  );
};

export default Edit;
