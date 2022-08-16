import React, { useEffect } from 'react';
import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layouts/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';


import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import TechModalList from './components/techs/TechModalList';

function App() {
  useEffect(() => {
    //initalize Materialize JS
    M.AutoInit();

  },[]);

  return (
    <>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechModalList />
         <Logs />
      </div>
    </>
  );
}

export default App;
