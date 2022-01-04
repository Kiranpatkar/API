import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const PostCall = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  let create = (e: any) => {
    e.preventDefault();
    axios
      .post('https://reqres.in/api/users', { name: name, job: role })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>Post Form</div>
      <form action="" onSubmit={create}>
        <input
          type="text"
          placeholder="Enter Your role"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Role"
          onChange={(e) => setRole(e.target.value)}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default PostCall;
