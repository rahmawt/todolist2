import React from 'react';
import "bulma/css/bulma.css";
import Todos from '../components/Todos';
import Display from '../components/Display';


const Layout = () => {

  return (
    <React.Fragment>
      <Todos/>
      <Display/>
    </React.Fragment>
  )
}

export default Layout;