import { AppBar, Avatar, Box, Button, styled, Toolbar, Typography } from "@mui/material"
import { KeyboardArrowDown } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position='sticky'>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', padding: '0 5px', alignItems: 'center'}}>
            <Typography variant='h4'>
                Lingo
            </Typography>

            <Button variant='contained' color='secondary' endIcon={<KeyboardArrowDown />}>Languages</Button>
            <Avatar sx={{width: 40, height: 40}} src='https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80' />
        </Toolbar>
    </AppBar>
  )
}

export default Navbar