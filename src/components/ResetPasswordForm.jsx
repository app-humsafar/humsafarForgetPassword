// src/ResetPasswordForm.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const ResetPasswordForm = () => {
    const { token } = useParams(); // Extract the token from the URL
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        // Make a request to your backend server to handle the password reset
        console.log('Token:', token);
        console.log('Password:', password);

        // Reset the message
        setMessage('Password has been reset successfully.');
        
        // Reset states
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <Container maxWidth="sm">
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
                    borderRadius: 1,
                    boxShadow: 3
                }}
            >
                <Typography variant="h4" component="h2" gutterBottom>
                    Reset Password
                </Typography>
                <TextField
                    type="password"
                    label="New Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                />
                <TextField
                    type="password"
                    label="Confirm Password"
                    variant="outlined"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Reset Password
                </Button>
                {message && (
                    <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
                        {message}
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default ResetPasswordForm;
