import React from 'react'
import { Box, AppBar, Toolbar, CssBaseline } from '@mui/material';

import HumsafarLogo from '../assets/humsafar-logo.png';

const Header = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" sx={{ backgroundColor: '#151515', minHeight: '10vh' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                        <img src={HumsafarLogo} alt="Humsafar Logo" />
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
