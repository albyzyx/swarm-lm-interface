import React from 'react'
import APITable from './APITable';
import AddAPI from './AddAPI';
import Navbar from '../Navbar';

export const TableLayout = () => {
  return (
    <section>
      <Navbar/>
      <AddAPI />
      <APITable />
    </section>
  );
}