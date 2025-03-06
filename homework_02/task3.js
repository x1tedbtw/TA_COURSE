let password = "TestUser@123";


function generatePassword() {
    if (password.length < 8) {
        console.log(`Password should have at least 8 characters!`);
        return;
    }

    let hasUpperCase = false;
    let hasNumber = false;
    let hasAtSymbol = false;

    let splittedPassword = password.split("");
    for (let char of splittedPassword) {
        if (char >= 'A' && char <= 'Z') { // A = 65 ; Z = 90; - sequential numerical values;
            hasUpperCase = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else if (char === '@') {
            hasAtSymbol = true;
        }
    }

    if (hasUpperCase && hasNumber && hasAtSymbol) {
        console.log("Password is secure!")
    } else {
        console.log("Password is not secure! Please retry!")
    }

}


generatePassword(password);