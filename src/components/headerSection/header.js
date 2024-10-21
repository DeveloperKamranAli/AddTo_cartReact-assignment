import { AppBar, Box, Button, IconButton, Toolbar, Typography,  } from '@mui/material';
import React from  'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../addtoCart/cart'

export default function ButtonAppBar() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <ShoppingCartIcon onClick={toggleDrawer(true)} />
        </Toolbar>
      </AppBar>

      <Cart open={open} toggleDrawer={toggleDrawer} />

    </Box>
  );
}