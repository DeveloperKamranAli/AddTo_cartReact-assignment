import React, { useEffect, useState } from "react";
import Product1 from "../../assets/hand.webp";
import Product2 from "../..//assets/mobile B.webp";
import Product3 from "../../assets/woilet.webp";
import { Box, Button, Card, Divider, IconButton, Snackbar, Typography } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';

const someProducts = [
  {
    id:1,
    img: Product1,
    name: "Heandphones",
    price: 100,
  },
  {
    id:2,
    img: Product2,
    name: "mobile Phone",
    price: 120,
  },
  {
    id:3,
    img: Product3,
    name: "woilet",
    price: 130,
  },
]

const Products = () => {  

  const [cartList, setCartList] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
 

  const CartHandler = (product) => {
    const isExist = cartList.find((cart) => cart.id === product.id);
    console.log(isExist);
    if (!isExist){
      setCartList((prev) => [...prev, product] );
    }else{
      setOpenAlert(true)
    }
   

  };

  const handleClose = (Event,
    reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  const action = (
    <React.Fragment>
     
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  

  useEffect(() => {
    let strCartList = JSON.stringify(cartList)
    localStorage.setItem( "cartList", cartList);
  },[cartList])

  return (
    <>
       <Snackbar
        open={openAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        // autoHideDuration={6000}
        onClose={handleClose}
        message="Product already in cart list"
        action={action}
      />

      <Box sx={{ display: "flex", gap: "50px", padding: "40px", justifyContent:"center", backgroundColor:"khaki"}}>
        {someProducts?.map((product, index) => {
          return (
            <Card key={index} sx={{ padding: "30px", cursor: "pointer", width: "250px" }}>
              <Box>
                <Box sx={{ textAlign: "center" }}>
                  <img width={100} src={product.img} alt={product.name} />
                </Box>
                <Typography sx={{ textAlign: "center" }} variant="h6">{product.name}</Typography>
                <Divider sx={{ borderColor: "#333" }} variant="fullwidth" flexItem />
                <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                  <ShareIcon />
                  <FavoriteIcon />
                  <AddShoppingCartIcon onClick={() => { CartHandler(product); }} />
                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default Products; 

