// src/ResetPasswordForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Import the check icon
import { useLocation } from 'react-router-dom';

const ResetPasswordForm = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false); // State to handle success

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        // Make a request to your backend server to handle the password reset
        console.log('Token:', token);
        console.log('Password:', password);

        // Set success state
        setIsSuccess(true);

        // Reset states
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <Container maxWidth="sm">
            {isSuccess ? (
                <Box
                    sx={{
                        mt: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 3,
                        border: '1px solid #ccc',
                        borderRadius: 5,
                        boxShadow: 3,
                    }}
                >
                    <CheckCircleOutlineIcon sx={{ color: 'green', fontSize: { lg: 90, xs: 50 } }} />
                    <Typography variant="h6" color="white" textAlign="center" sx={{ mt: 2 }}>
                        Your password has been successfully changed.
                    </Typography>
                </Box>
            ) : (
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        mt: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 3,
                        border: '1px solid #ccc',
                        borderRadius: 5,
                        boxShadow: 3,
                    }}
                >
                    <Typography variant="h4" component='h2' color='white' gutterBottom>
                        Reset Password
                    </Typography>

                    <TextField
                        type="password"
                        label="New Password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        InputLabelProps={{
                            style: {
                                color: 'white',
                                '&:hover': {
                                    color: 'white',
                                },
                            },
                        }}
                        InputProps={{
                            style: {
                                color: 'white',
                                '&:hover': {
                                    color: 'black',
                                },
                                '&:focus': {
                                    color: 'black',
                                },
                            },
                        }}
                        sx={{
                            width: '90%',
                            mb: 2,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                        }}
                    />

                    <TextField
                        type="password"
                        label="Confirm Password"
                        variant="outlined"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        InputLabelProps={{
                            style: {
                                color: 'white',
                                '&:hover': {
                                    color: 'white',
                                },
                            },
                        }}
                        InputProps={{
                            style: {
                                color: 'white',
                                '&:hover': {
                                    color: 'black',
                                },
                                '&:focus': {
                                    color: 'black',
                                },
                            },
                        }}
                        sx={{
                            mb: 2,
                            width: '90%',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                        }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ width: '80%' }}
                        style={{ backgroundColor: 'black', color: 'white' }}
                    >
                        Reset Password
                    </Button>

                    {message && (
                        <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
                            {message}
                        </Typography>
                    )}
                </Box>
            )}
        </Container>
    );
};

export default ResetPasswordForm;
