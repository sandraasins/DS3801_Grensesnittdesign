import React from 'react';
import { useState } from 'react';
import { Container, Box, TextField, Grid, Typography, Button, Modal } from '@mui/material';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function Payment() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const [name, setName] = useState('');
    const [address, setAdress] = useState('')
    const [phone, setPhone] = useState('')
    const [card, setCard] = useState('')
    const [exDate, setExDate] = useState('')
    const [cvc, setCvc] = useState('')

    const [nameError, setNameError] = useState(false);
    const [addressError, setAdressError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [cardError, setCardError] = useState(false)
    const [exDateError, setExDateError] = useState(false)
    const [cvcError, setCvcError] = useState(false)

    const handleSubmit = (e) => { 
        name ? setNameError(false) : setNameError(true)
        address ? setAdressError(false) : setAdressError(true)
        phone ? setPhoneError(false) : setPhoneError(true)
        card ? setCardError(false) : setCardError(true)
        exDate ? setExDateError(false) : setExDateError(true)
        cvc ? setCvcError(false) : setCvcError(true)

        e.preventDefault()
        if (name && address && phone && card && exDate && cvc) {
            setNameError(false)
            setAdressError(false)
            setPhoneError(false)
            setCardError(false)
            setExDateError(false)
            setCvcError(false) 
        } 
    }

   
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false); 


    return(
        <>
        <Navbar />
            <main>
                <Container className="payment-container" maxWidth="xl">
                    <Box className="order-container" sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, m: 5, border: 1, borderColor: '#A3A29E', padding: 5 }}>
                            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                            <Grid container spacing={6}>
                                <Grid item xs={12} md={8} lg={5}>
                                    <Typography component="h1" variant="h6" sx={{ letterSpacing: '4px', mb: 1 }}>
                                    DELIVERY INFORMATION:
                                    </Typography>
                                    <Grid item lg={12}>
                                        <TextField
                                        onChange={(e) => setName(e.target.value)}
                                        fullWidth
                                        style={{ marginBottom: 20, color: '#1D1F2C' }}
                                        label="Name"
                                        variant="outlined"
                                        required 
                                        error={nameError}/>
                                    </Grid>
                                    <Grid item lg={12}>    
                                        <TextField
                                        onChange={(e) => setAdress(e.target.value)}
                                        fullWidth
                                        style={{ marginBottom: 20, color: '#1D1F2C' }}
                                        label="Address"
                                        variant="outlined"
                                        required 
                                        error={addressError}/>
                                    </Grid>
                                    <Grid item lg={12}>
                                        <TextField
                                        onChange={(e) => setPhone(e.target.value)}
                                        fullWidth
                                        style={{ marginBottom: 20, color: '#1D1F2C' }}
                                        label="Phone"
                                        multiline
                                        variant="outlined"
                                        required
                                        error={phoneError} />
                                    </Grid>
                                    

                                    
                                    <Button disabled={!name || !address || !phone || !card || !exDate || !cvc} type="submit" className="submit-button"  onClick={handleOpen} 
                                            sx={{backgroundColor: '#1D1F2C', "&:hover": {
                                                backgroundColor: '#1D1F2C', border: "solid lightgrey 1px"},fontSize: 18, width: '18em', height: '3em', color: 'white', letterSpacing: '4px', mt: '2em', mb:'2em' }} 
                                            variant="text" size="medium"> PURCHASE
                                    </Button>
                              
                                
                                
                                </Grid>

                                <Grid item xs={12} md={8} lg={5}>
                                    <Typography component="h1" variant="h6" sx={{ letterSpacing: '4px', mb: 1 }}>
                                    CARD INFORMATION:
                                    </Typography>
                                    <Grid item lg={12}>
                                        <TextField
                                        onChange={(e) => setCard(e.target.value)}
                                        fullWidth
                                        style={{ marginBottom: 20, color: '#1D1F2C' }}
                                        label="Card number"
                                        variant="outlined"
                                        required 
                                        error={cardError}/>
                                    </Grid>
                                    <Grid item lg={12}>    
                                        <TextField
                                        onChange={(e) => setExDate(e.target.value)}
                                        fullWidth
                                        style={{ marginBottom: 20, color: '#1D1F2C' }}
                                        label="Expiration date"
                                        variant="outlined"
                                        required 
                                        error={exDateError}/>
                                    </Grid>
                                    <Grid item lg={12}>
                                        <TextField
                                        onChange={(e) => setCvc(e.target.value)}
                                        fullWidth
                                        style={{ marginBottom: 20, color: '#1D1F2C' }}
                                        label="CVC"
                                        multiline
                                        variant="outlined"
                                        required 
                                        error={cvcError}/>
                                    </Grid>
                            </Grid>
                            </Grid> 
                        </form>
                    </Box>
                   
                </Container>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Thank you for your order!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    It will be ready for pick-up in 20 minutes
                    </Typography>
                    </Box>
                </Modal>
            </main>
        <Footer /> 
       </>
    )
}

export default Payment;
