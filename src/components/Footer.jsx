import React from 'react'
import { Container, Box, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import HumsafarLogoFooter from '../assets/Ellipse 108.svg';

const Footer = () => {
    return (
        <>
            <Box component="footer" sx={{ py: 2, backgroundColor: '#151515', minHeight: '20vh' }}>
                <Container>
                    
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                        <Typography variant="body1" color="white"><strong>Phone:</strong> 03137964010</Typography>
                        <Typography variant="body1" color="white" sx={{ fontWeight: 'lighter' }}><i>#ParhaLikhaKasur</i></Typography>
                    </Box>

                    <Box display="flex" justifyContent="flex-start" alignItems="center">
                        <Typography variant="body1" color="white"><strong>Email:</strong> humsafarapp24@gmail.com</Typography>
                    </Box>

                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                        <Box>
                            <Link href="https://www.facebook.com/profile.php?id=61559456429990&mibextid=ZbWKwL" target='_blank' rel='noopener noreferrer' sx={{ mr: 2 }}>
                                <IconButton
                                    sx={{
                                        backgroundColor: '#292929',
                                        color: '#fff',
                                        borderRadius: 2,
                                        '&:hover': {
                                            backgroundColor: '#ffc451',
                                            color: '#151515',
                                        },
                                    }}
                                >
                                    <FacebookIcon sx={{ fontSize: 24 }} />
                                </IconButton>
                            </Link>
                            <Link href="https://www.instagram.com/humsafar.journey?igsh=MWszcHk4dzYyZ2diZA" target='_blank' rel='noopener noreferrer'>
                                <IconButton
                                    sx={{
                                        backgroundColor: '#292929',
                                        color: '#fff',
                                        borderRadius: 2,
                                        '&:hover': {
                                            backgroundColor: '#ffc451',
                                            color: '#151515',
                                        },
                                    }}
                                >
                                    <InstagramIcon sx={{ fontSize: 24 }} />
                                </IconButton>
                            </Link>
                        </Box>

                        <Box display="flex" alignItems="center">
                            <Typography variant="body2" color="white">Powered by</Typography>
                            <img src={HumsafarLogoFooter} alt="Logo" style={{ marginLeft: 5, height: '50px', width: '50px' }} />
                        </Box>
                        
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Footer
