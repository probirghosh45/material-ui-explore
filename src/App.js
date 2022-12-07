import * as React from 'react';
import {ScopedCssBaseline } from '@mui/material';
import Home from './Home';
import CheckBox from './CheckBox';
import RatingMui from './RatingMui';



export default function MyApp() {
  return (
    <React.Fragment>
      <ScopedCssBaseline>
        <Home/>
        <CheckBox/>
        <RatingMui/>
      </ScopedCssBaseline>
    </React.Fragment> 
  );
}
