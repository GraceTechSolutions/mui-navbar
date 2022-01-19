import { AppBar, Button, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from './Drawer';


export default function Navbar() {
    const theme = useTheme()
    const useStyle = makeStyles(()=>({
        navLinks: {
            marginLeft: theme.spacing(5),
            display: 'flex',
        },
        logo: {
            flexGrow: '1',
            cursor: 'pointer'
        },
        link: {
            TextDecoration: 'none',
            color: 'white',
            marginLeft: theme.spacing(10),
            textDecoration: 'none',
            fontWeight: 'bold',
            '&:hover': {
                color: theme.palette.success.main
            }
        }
    }));
    const classes = useStyle()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    console.log(isMobile);
    return (
        <ThemeProvider theme={theme}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h4' className={classes.logo}>Amazon</Typography>
                    {isMobile?
                        <Drawer/>
                        :
                        <div className={classes.navLinks}>
                            <Link className={classes.link} to='/'>Home</Link>
                            <Link className={classes.link} to='/about'>About</Link>
                            <Link className={classes.link} to='/contact'>Contact</Link>
                            <Link className={classes.link} to='faqs'>FAQs</Link>
                        </div>
                    }
                </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}
