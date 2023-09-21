import React from 'react';
import { Card, CardHeader, CardContent, Typography, Button, Grid} from '@mui/material';

import '../../style.css';


export default function PizzaCard({ pizza, addPizzaToCart }){

    
    return (
    <>
        <Grid item lg={12} sx={{flexDirection: 'column'}}>
        <Card className="card" elevation={0} sx={{ backgroundColor: '#F8F6F2',fontsize: 16,  bacgroundColor: '#1D1F2C'}} color="text.secondary" gutterBottom>                      
            <Grid item xs={12} md={6} lg={8}>
                <CardHeader sx={{ml: '2em', mr: '2em'}}/>
                    <Button onClick={() => addPizzaToCart(pizza)}
                            sx={{ justifyContent: 'flex-end', color: '#1D1F2C', backgroundColor: '#FFFFFF', letterSpacing: '4px', fontSize: 18, borderColor: '#1D1F2C', ml: '2em', mr: '3em', mt:'1em' }} 
                            className='add-button' variant="outlined" size="small">ADD
                    </Button>
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} color="text.secondary">{ pizza.name }</Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" className="description" > { pizza.description }</Typography>
                        <Typography sx={{ fontsize: 10}} color="text.secondary" className="allergens" gutterBottom> { pizza.allergens }</Typography>
                        <Typography sx={{ fontsize: 10}} variant="h6" className="price" color="text.secondary" gutterBottom> { pizza.price }kr</Typography>                
                    </CardContent>
                    <CardHeader/>
                </Grid>
            </Card>
        </Grid>
    </>
  
    )
}
