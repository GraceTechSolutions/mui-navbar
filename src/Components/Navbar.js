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
        },
        link_: {
            TextDecoration: 'none',
            color: 'black',
            textDecoration: 'none',
            fontWeight: 'bold',
            paddingRight: theme.spacing(10),
            '&:hover': {
                color: theme.palette.success.main
            }
        }
    }));
    const classes = useStyle()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    console.log(isMobile);
    const navLinks = [
        {name: 'Home', id:1, endpoint: ''},
        {name: 'About', id:2, endpoint: 'about'}, 
        {name: 'Address', id:3, endpoint: 'address'}, 
        {name: 'Contact', id:4, endpoint: 'contact'}
    ];
    let links = navLinks.map((val) =>{
        return <Link className={classes.link} key={val.id} to={val.endpoint}>{val.name}</Link>;
    })
    return (
        <ThemeProvider theme={theme}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h4' className={classes.logo}>Amazon</Typography>
                    {isMobile?
                        <Drawer links={navLinks} classname={classes.link_}/>
                        :
                        <div className={classes.navLinks}>
                            {links}
                        </div>
                    }
                </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}
