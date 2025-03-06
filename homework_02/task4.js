let nameInput = "Bob";
let emailInput = "BobThebuilder@email.com"; // Fixed the email for a valid test case
let password = "TestUser@123";
let repeatPassword = "TestUser@123";

function checkPassword(password) {
    if (password.length < 8) {
        console.log("Password should have at least 8 characters!");
        return false;
    }

    let hasUpperCase = false;
    let hasNumber = false;
    let hasSpecialChar = false;

    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else if (char === '@' || char === '#' || char === '$') {
            hasSpecialChar = true;
        }
    }

    if (hasUpperCase && hasNumber && hasSpecialChar) {
        return true;
    } else {
        console.log("Password is not secure! Please retry!");
        return false;
    }
}

function validateEmail(email) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
        return true;
    } else {
        console.log("Email is incorrect!");
        return false;
    }
}

function matchPassword(password) {
    if (password !== repeatPassword) {
        console.log("Confirmation is incorrect!");
        return false;
    }
    return true;
}

function validateForm() {
    if (nameInput.length === 0 || emailInput.length === 0 || password.length === 0) {
        console.log("Please fill out all the fields!");
        return;
    }

    let isEmailValid = validateEmail(emailInput);
    let isPasswordValid = checkPassword(password);
    let isPasswordMatching = matchPassword(password);

    if (isEmailValid && isPasswordValid && isPasswordMatching) {
        console.log("Success!");
    }
}

validateForm();
