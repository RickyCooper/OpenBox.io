import React from 'react';

/* [ Validate Function ]

accepts two arguments rules and input 

    rules = An object of validation rules.

    input = Userinput.

*/

export const Validate = (rules, value) => {
    let isValid = true;
    let errorMessage = null;

    if (rules.required) {
        isValid = value.trim() !== `` && isValid;
        console.log(errorMessage);

        if (rules.maxLength) {
            isValid = value.trim().length < rules.maxLength && isValid;

            if (value.trim().length > rules.maxLength)
                errorMessage = <p>* input is too long *</p>;
        }
        if (rules.minLength) {
            isValid = value.trim().length > rules.minLength && isValid;
            if (value.trim().length < rules.minLength) {
                errorMessage = <p>* input is too short *</p>;
            }
        }
        if (value.trim() === ``) {
            errorMessage = `Required Input`;
            console.log(errorMessage);
        }
    }
    return [isValid, errorMessage];
};

export default Validate;
