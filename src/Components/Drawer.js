import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import React from 'react'
import { Drawer as Drawer_ } from '@mui/material';
import { ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';


export default function Drawer() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <IconButton color='secondary' onClick={()=> {setOpen(true)}}>
                <MenuIcon color='action'/>
            </IconButton>
            <Drawer_
            anchor='left'
            open={open}
            onClose={()=> {setOpen(false)}}
            >
                <ListItem button>
                    <ListItemText primary={'Hello'} />
                </ListItem>
            </Drawer_>
        </div>
    )
}
