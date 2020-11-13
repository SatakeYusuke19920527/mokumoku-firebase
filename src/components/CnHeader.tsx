import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const CnHeader = () => {
  return (
      <AppBar position="static" color="inherit">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            NewOne
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

export default CnHeader