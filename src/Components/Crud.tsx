import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Edit from './Edit';

import ListContact from './ListContact';

const Crud = () => {
  return (
    <Routes>
      <Route path="/" element={<ListContact />}></Route>
      <Route path="/Edit" element={<Edit />}></Route>
    </Routes>
  );
};

export default Crud;
