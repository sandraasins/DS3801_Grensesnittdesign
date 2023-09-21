import React from 'react';
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Basket from './Basket';


function CheckOut({ addPizzaToCart, addPastaToCart, addSideDishesToCart, addBeverageToCart, removeItem, shoppingCartItems, props }) {
    
    //Navigate to other menus//
    const navigate = useNavigate()
    const goToOrderOnline = () =>{ navigate("/orderOnline") }
    const goToSideDishesMenu = () =>{ navigate("/sideDishesList") }
    const goToBeveragesMenu = () =>{ navigate("/beveragesList") }

    return(
        <>
            <Navbar />
            <main>
                <Container className="checkout-container" maxWidth="xl">
                    <Box className="order-container" sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, m: 10, border: 1, borderColor: '#A3A29E', padding: 5 }}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={5} lg={7}>
                                <Typography component="h1" variant="h6" color="text.secondary" sx={{ letterSpacing: '4px', fontFamily: 'Roboto', mb: 4 }}>
                                    YOUR ORDER
                                </Typography>
                                <Basket 
                                    addPizzaToCart={addPizzaToCart}
                                    addPastaToCart={addPastaToCart} 
                                    addSideDishesToCart={addSideDishesToCart}
                                    addBeverageToCart={addBeverageToCart} 
                                    removeItem={removeItem} 
                                    shoppingCartItems={shoppingCartItems} 
                                    />
                            </Grid> 
                            <Grid item xs={12} md={5} lg={5}>
                                <Grid item lg={12}>
                                    <Button className="check-out-button" onClick ={() => goToOrderOnline()} 
                                        sx={{ backgroundColor: '#1D1F2C', "&:hover": {
                                            backgroundColor: '#1D1F2C', border: "solid lightgrey 1px"}, mb: 1, color: 'white', letterSpacing: '4px'  }} variant="text" size="large">ORDER MORE FOOD?
                                    </Button>
                                </Grid>
                                <Grid item lg={12}>             
                                    <Button className="check-out-button" onClick ={() => goToSideDishesMenu()} 
                                        sx={{ backgroundColor: '#1D1F2C', "&:hover": {
                                            backgroundColor: '#1D1F2C', border: "solid lightgrey 1px"}, mb: 1, color: 'white', letterSpacing: '4px'  }} variant="text" size="large">ANOTHER SIDE DISH?
                                    </Button>
                                </Grid>
                                <Grid item lg={12}>    
                                    <Button className="check-out-button" onClick ={() => goToBeveragesMenu()} 
                                    sx={{ backgroundColor: '#1D1F2C', "&:hover": {
                                        backgroundColor: '#1D1F2C', border: "solid lightgrey 1px"}, color: 'white', letterSpacing: '4px'  }} variant="text" size="large">FORGOT TO ADD DRINKS?
                                    </Button> 
                                </Grid>
                            </Grid>     
                        </Grid>
                    </Box>   
                </Container>
            </main>
            <Footer />
        </>
    );
}
export default CheckOut;
