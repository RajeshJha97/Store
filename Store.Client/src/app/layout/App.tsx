import { useEffect, useState } from 'react';
import { Product } from '../models/product';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
