import { Container } from '@mui/material';

import ResetPasswordForm from './ResetPasswordForm';
import Header from './Header';
import Footer from './Footer';

import HeroBackground from '../assets/hero-bg.jpg';

const MainComponent = () => {
    return (
        <>
            {/* Header */}
            <Header />

            {/* Reset Password Form */}
            <Container
                sx={{
                    padding: 0,
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${HeroBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(1px)',
                        zIndex: -1,
                    }}
                />
                <ResetPasswordForm />
            </Container>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default MainComponent;
