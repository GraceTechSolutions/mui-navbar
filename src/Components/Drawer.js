import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, ListItemIcon } from '@mui/material';
import React from 'react'
import { Drawer as Drawer_ } from '@mui/material';
import { ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom'


export default function Drawer({links, classname}) {
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
                {links.map(val=>{
                    return (
                        <Link to={val.endpoint} key={val.id} onClick={()=>{setOpen(false)}} className={classname}>
                            <ListItem button>
                                <ListItemText primary={val.name} />
                            </ListItem>
                        </Link>
                    )
                })}

            </Drawer_>
        </div>
    )
}
