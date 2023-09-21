import { Toolbar, IconButton } from "@mui/material";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../../style.css';

function NavBarLinks() {

    return(
            <Toolbar className="nav-content-container" sx={{ mt: 5, mb: 4 , justifyContent: 'right'}}>
                <Button sx={{ justifyContent: 'flex-end', underline: 'hover', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                        className='navbar-button' variant="text" size="medium"><a href="#order-online">ORDER FOOD</a>
                </Button>

                <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                        className='navbar-button' variant="text" size="medium"><a href="#contact-us">CONTACT US</a>
                </Button>

                <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                        className='navbar-button' variant="text" size='medium'><a href="#about-us">ABOUT US</a>
                </Button>

                <IconButton component={ Link } to="/checkOut" color='primary' aria-label='shopping cart'>
                          <AddShoppingCartIcon className='shopping-cart' sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 45 }} />
                </IconButton>
            </Toolbar>
    );
}

export default NavBarLinks;