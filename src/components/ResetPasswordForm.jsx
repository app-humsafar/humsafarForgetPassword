import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPasswordForm = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('https://humsafar-satgging-be-78ceb721e8d8.herokuapp.com/auth/resetPassword', {
                newPassword: password,
                confirmPassword: confirmPassword
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 201) {
                setIsSuccess(true);
                toast.success('Your password has been successfully changed.');
            } else {
                toast.error(response.data.message || 'Something went wrong.');
            }
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = error.response?.data?.message === 'jwt expired'
                ? 'The password reset link has expired or is invalid. Please request a new password reset.'
                : error.response?.data?.message || 'An error occurred. Please try again.';
            toast.error(errorMessage);
        }
    };

    return (
        <Container maxWidth="sm">
            <ToastContainer />
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
                    <CheckCircleOutlineIcon style={{ color: 'green', fontSize: 50 }} />
                    <Typography variant="h6" color="white" sx={{ mt: 2 }}>
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
                </Box>
            )}
        </Container>
    );
};

export default ResetPasswordForm;
