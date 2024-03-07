import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';

const Registre = () => {
    const steps = [
        "step 1",
        "step 2",
        "step 3",
    ];
    const activeStep = 0; // Vous pouvez changer cela en fonction de l'étape actuelle

    return (
        <div>

            <Header />
            <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                                <h1 class="display-5 mb-3">S'inscrire
                                </h1>
                                <Box sx={{ width: '100%' }}>
                                    <Stepper activeStep={activeStep} alternativeLabel>
                                        {steps.map((label, index) => (
                                            <Step key={label}>
                                                <StepLabel
                                                    sx={{
                                                        color: index === activeStep ? '#3cb815' : 'black', // Changer la couleur du texte
                                                        '& .MuiStepIcon-root': {
                                                            color: index === activeStep ? '#3cb815' : 'grey', // Changer la couleur de l'icône
                                                        },
                                                    }}
                                                >
                                                    {label}
                                                </StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>
                                </Box>
                                <p> Connectez-vous pour découvrir les articles disponibles et prendre part aux ventes proposées sur notre plateforme. </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Registre