import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ListContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [details, setDetails] = useState<any>([]);
  const [edit, setEdit] = useState(false);
  const [id, setid] = useState('');

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
    setName(data.name);
    setNumber(data.number);
    setid(data.id);
    setEdit(true);
  };
  let saveEdit = (e: any) => {
    e.preventDefault();

    console.log(name);

    axios
      .put(`https://61d03a49cd2ee50017cc9801.mockapi.io/Crud/${id}`, {
        name: name,
        number: number,
      })
      .then(() => {
        getUser();
      });
    setName('');
    setNumber('');
    setEdit(false);
  };
  let deleteData = (data: any) => {
    axios
      .delete(`https://61d03a49cd2ee50017cc9801.mockapi.io/Crud/${data.id}`)
      .then(() => {
        getUser();
      });
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ border: '2px solid red', height: '60vh', padding: '50px' }}>
        <h1>{edit ? 'EDIT CONTACT' : 'ADD NEW CONTACT'}</h1>
        <form action="" onSubmit={edit ? saveEdit : save}>
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
      </div>
      <br />
      <div
        style={{
          marginLeft: '50px',
          border: '2px solid red',
          height: '60vh',
          padding: '50px',
        }}
      >
        <h1>MY CONTACT DETAILS </h1>

        {details.length === 0 && <h3>Oops its Empty !</h3>}
        {details.length > 0 && (
          <table>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {details.map((data: any) => (
              <tr className="tr" key={data.id}>
                <td>{data.name} </td>
                <td>{data.number}</td>
                <td className="td" onClick={() => updateData(data)}>
                  <FontAwesomeIcon icon={faEdit} />
                </td>

                <td className="td" onClick={() => deleteData(data)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </td>
              </tr>
            ))}
          </table>
        )}
      </div>
    </div>
  );
};

export default ListContact;
