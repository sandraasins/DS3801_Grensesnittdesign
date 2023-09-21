import { Container, Box, Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../style.css';


export default function OrderOnline (){

    const navigate = useNavigate()

    const goToPizzaMenu = () =>{
        navigate("/pizzaList")
    }
    const goToPastaMenu = () =>{
        navigate("/pastaList")
    }
    const goToSideDishesMenu = () =>{
        navigate("/sideDishesList")
    }

    const goToBeveragesMenu = () =>{
        navigate("/beveragesList")
}

    return(
        <main className="orderOnline-container">
            <Container >
                <Grid container>
                    <Grid item sm={12} md={6} lg={12} sx={{flexDirection: 'column'}}>
                        <Typography className="orderOnline-header" component="h1" variant="h2" color="text.secondary"  
                                sx={{ flexWrap: 'wrap', fontWeight: '700', justifyContent:'center', letterSpacing: '8px', textAlign: 'center', alignItem: 'center', mt: '2em', mb: '2em' }}>
                                <a id="order-online">ORDER ONLINE</a>
                        </Typography>
                    </Grid>           
                    <Grid item sm={12} sx={{flexDirection: 'row'}}>
                        <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', mb: '2em' }} item xs={6}>
                            <Button  onClick ={() => goToPizzaMenu()}
                                style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C'}} 
                                className='orderOnline-button' variant="outlined"  size="large">PIZZA  
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item sm={12}  sx={{flexDirection: 'row'}}>
                        <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', mb: '2em' }} item xs={6}>
                            <Button onClick ={() => goToPastaMenu()}
                                style={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C' }} 
                                className='orderOnline-button' variant="outlined" size="large">PASTA
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item sm={12} sx={{flexDirection: 'row'}}>
                        <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', mb: '2em'}} item xs={6}>
                            <Button onClick ={() => goToSideDishesMenu()}
                                    style={{  backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C' }} 
                                    className='orderOnline-button' variant="outlined" size="large">SIDE DISHES
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item sm={12} sx={{flexDirection: 'column'}}>
                        <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', mb: '5em' }} item xs={6}>
                            <Button onClick ={() => goToBeveragesMenu()}
                                    style={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C' }} 
                                    className='orderOnline-button' variant="outlined" size="large">BEVERAGES
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}
