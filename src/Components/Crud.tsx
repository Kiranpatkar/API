import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Addnew from './Addnew';
import ListContact from './ListContact';

const Crud = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ListContact />
    </div>
  );
};

export default Crud;
