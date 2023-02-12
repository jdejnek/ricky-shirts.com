import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';
import './sign-up-form.styles.scss';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    repeatPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    // Destructure fields for later use
    const { displayName, email, password, repeatPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    // Create user doc in Firestore on submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if passwords match
        if (password !== repeatPassword) {
            alert('Passwords do not match.');
            return;
        }
        try {
            // Get the auth object and destructure user data from it
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            // Set the doc to Firestore, pass the displayName to additonalInformation argument
            await createUserDocumentFromAuth(user, { displayName });
            // Clear the form fields
            resetFormFields();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use.')
            } else {
                console.log('Encountered an error while trying to register the account.', error);
            }

        }
    }

    // Update formFields state value based on user input
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={(handleSubmit)}>
                <FormInput label='Username' type='text' required onChange={handleChange} name='displayName' value={displayName} />
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />
                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />
                <FormInput label='Repeat password' type='password' required onChange={handleChange} name='repeatPassword' value={repeatPassword} />
                <Button type='submit'>Sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;