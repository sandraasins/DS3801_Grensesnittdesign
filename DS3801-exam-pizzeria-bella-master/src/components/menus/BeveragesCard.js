import React from 'react';
import { Card, CardContent, CardHeader, Typography, Button, Grid } from '@mui/material';

import '../../style.css';

export default function BeveragesCard({ beverage, addBeverageToCart }){

    return (
    <>
        <Grid item lg={12} sx={{flexDirection: 'column'}}>
            <Card className="card" elevation={0} sx={{ backgroundColor: '#F8F6F2',fontsize: 16,  bacgroundColor: '#1D1F2C'}} color="text.secondary" gutterBottom> 
            <Grid item xs={12} md={6} lg={9}>
                <CardHeader sx={{ml: '2em', mr: '2em'}}/>
                    <Button onClick={() => addBeverageToCart(beverage)}
                        sx={{ justifyContent: 'flex-end', color: '#1D1F2C', backgroundColor: '#FFFFFF', letterSpacing: '4px', fontSize: 18, borderColor: '#1D1F2C', ml: '2em', mr: '3em', mt:'1em' }} 
                        className='add-button' variant="outlined" size="small">ADD
                    </Button>
                <CardContent>
                    <Typography sx={{ fontsize: 16}} color="text.secondary">{ beverage.name }</Typography>
                    <Typography sx={{ fontsize: 16}} color="text.secondary">{ beverage.description }</Typography>
                    <Typography sx={{ fontsize: 16}} color="text.secondary">{ beverage.price }kr</Typography>
                </CardContent>
                <CardHeader/>
                </Grid>
            </Card>
        </Grid>
    </>
    )
}

