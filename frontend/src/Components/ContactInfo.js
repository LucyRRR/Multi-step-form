import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const ContactInfo = ({ prevStep, nextStep, handleChange }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form>
                    <Grid container spacing={2}>

                        {/* Jmeno*/}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                placeholder="Jmeno"
                                label="Jmeno"
                                onChange={handleChange('firstName')}
                            />
                        </Grid>
                        {/* Prijmeni */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                placeholder="Prijmeni"
                                label="Prijmeni"
                                onChange={handleChange('lastName')}
                            />
                        </Grid>

                        {/* Telefonni cislo */}
                        <Grid item xs={12}>
                            <TextField
                                placeholder="Telefonni cislo"
                                label="Telefonni cislo"
                                onChange={handleChange('TelephoneNumber')}
                                autoComplete="Telefonni cislo"
                                fullWidth
                            />
                        </Grid>

                        {/* Email */}
                        <Grid item xs={12}>
                            <TextField
                                placeholder="Emailova adresa"
                                label="Emailova adresa"
                                onChange={handleChange('email')}
                                autoComplete="Emailova adresa"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                onClick={Previous}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Previous
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                onClick={Continue}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default ContactInfo