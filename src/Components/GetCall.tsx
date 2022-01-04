import React, { useState } from 'react';
import axios from 'axios';

const GetCall = () => {
  const [path, setPath] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  let details = (e: any) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${path}`)
      .then((res) => {
        setUrl(res.data.avatar_url);

        setError('');
      })
      .catch((err) => {
        setError('oops 404 not found');
        setPath('');
        setUrl('');
      });
  };
  return (
    <div>
      <h1>GIT-HUB PROFILE</h1>
      <form onSubmit={details}>
        <input
          type="text"
          placeholder="Enter your github username"
          value={path}
          onChange={(e) => setPath(e.target.value)}
        />
        <input type="submit" />
      </form>
      <br />
      <br />
      <h1> {error}</h1>
      <a target="_blank" href={`https://github.com/${path}`}>
        <img src={url}></img>
      </a>
    </div>
  );
};

export default GetCall;
