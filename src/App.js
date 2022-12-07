import * as React from 'react';
import {ScopedCssBaseline } from '@mui/material';
import Home from './Home';


export default function MyApp() {
  return (
    <React.Fragment>
      <ScopedCssBaseline>
        <Home/>
      </ScopedCssBaseline>
    </React.Fragment> 
  );
}
