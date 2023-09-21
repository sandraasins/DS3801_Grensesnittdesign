import { Button, Grid, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Basket({ shoppingCartItems, removeItem }) {

    const navigate = useNavigate()

    const goToPayment = () =>{ navigate("/payment") }

    const itemsPrice = shoppingCartItems.reduce((a, b) => a + b.price * b.qty, 0);

    return(
        <div>
            <div> {shoppingCartItems.length === 0 && <Typography sx={{ fontFamily: 'Roboto' }}>Shopping cart is empty</Typography>}</div>
            {shoppingCartItems.map((item) => (
                <Grid containers spacing ={2} key={item.id} className="product-row" sx={{ }}>
                        <Typography sx={{ fontFamily: 'Roboto', color: '#1D1F2C' }}>
                        <Grid item xs={4} lg={6}> 
                            {item.name} 
                        </Grid>
                        <Grid item xs={4} lg={8}>
                            {item.qty} x {item.price} KR
                            <Button sx={{ }} onClick={() => removeItem(item)} className="remove-item" sx={{ ml: 10, color: 'black' }}>
                                <CloseIcon aria-label="remove item from cart" sx={{ justifyContent: 'flex-end', color: '#1D1F2C', fontSize: 24 }} />
                            </Button>
                        </Grid>
                    </Typography>
                </Grid>
            ))}

            {shoppingCartItems.length !== 0 && (
                <>
                <hr></hr>
                <div className="total-price-row">
                <Typography sx={{ fontFamily: 'Roboto', color: '#1D1F2C' }}>
                    <div><strong>TOTAL PRICE</strong></div>
                    <div>{itemsPrice} KR</div>
                </Typography>
                </div>
                </>
            )}
            <Button className="check-out-button" onClick ={() => goToPayment()} itemsPrice={itemsPrice} sx={{ backgroundColor: '#1D1F2C', "&:hover": {
            backgroundColor: '#1D1F2C', border: "solid lightgrey 1px"}, mt: 2, color: 'white', letterSpacing: '4px' }} variant="text">GO TO PAYMENT</Button>
        </div>
    );
}

export default Basket;
