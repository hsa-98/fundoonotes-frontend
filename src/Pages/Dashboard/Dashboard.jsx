import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { InputAdornment } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Refresh from '@mui/icons-material/Refresh';
import GridView from '@mui/icons-material/GridView';
import { Settings,Apps } from '@material-ui/icons';
import { TextField} from '@mui/material';
import '../Dashboard/Dashboard.scss'
    





export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static"
        color='transparent'
      >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                FundooNotes
          </Typography>
          <Box  className = 'searchBar'>
            <TextField
                type='text'
                label='Search'
                variant='filled' 
                className='searchLength'
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon fontSize='large'/>
                  </InputAdornment>
                }
            />
          </Box>
          <Box >
            <IconButton   color="inherit">
                <Refresh  fontSize='large'/>
            </IconButton>
            <IconButton color="inherit">
                <GridView fontSize='large'/>
            </IconButton>
            <IconButton color='inherit'>
              <Settings fontSize='large'/>
            </IconButton>
          </Box>
          <Box className='accountButton'>
              <Apps fontSize='large'/>
              <AccountCircle fontSize='large' />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
