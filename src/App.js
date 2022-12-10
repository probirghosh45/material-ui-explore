import * as React from 'react';
import {Box, ScopedCssBaseline } from '@mui/material';
import Home from './Home';
import CheckBox from './CheckBox';
import RatingMui from './RatingMui';
import SkeletonMui from './SkeletonMui';
import SxMui from './SxMui';
import CardMui from './CardMui';




export default function MyApp() {
  return (
    <div>
      <ScopedCssBaseline>
        <Home/>
        <CheckBox/>
        <RatingMui/>
        <SkeletonMui/>
        <SxMui/>
        <CardMui/>
      </ScopedCssBaseline>
    </div> 
  );
}




// import { Box } from '@mui/material';
// import React from 'react';

// const App = () => {
//   return (
//     <Box sx={{
//       height: "100vh",
//       width : "100vw",
//       bgcolor:'secondary.main'
//     }}>
//     </Box>
//   );
// };

// export default App;