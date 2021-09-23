import React, { Component } from 'react'
import PropertyInfo from './PropertyInfo'
import ContactInfo from './ContactInfo'
import Success from "./Success";

export default class Search extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        TelephoneNumber: '',
        email: '',
        okres: '',
        kraj: '',
    }

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // Handle fields change
    handleChange = input => e => {
        console.log({ [input]: e.target.value });
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, TelephoneNumber, email, okres, kraj } = this.state;
        const values = { firstName, lastName, TelephoneNumber, email, okres, kraj }
        console.log(values);
        switch (step) {
            case 1:
                return (
                    <PropertyInfo
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                    />
                )

            case 2:
                return (
                    <ContactInfo
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                    />
                )
            case 3:
                console.log("sme v 3");
                return (
                    <Success values={values} />
                )
            default:
            // do nothing
        }
    }
}