function validation() {
    let checkName = 0;
    let checkEmail = 0;
    let checkPhone = 0;

    if (document.getElementById("name").value.length == 0) {
        document.getElementById("nameError").innerHTML = "<em> You did not enter your name </em>";
        document.getElementById("nameError").classList.add("text-danger");
        checkName = 0;
    } else {
        document.getElementById("nameError").innerHTML = "Valid";
        document.getElementById("nameError").classList.remove("text-danger");
        document.getElementById("nameError").classList.add("text-success");
        checkName = 1;
    }
    if (document.getElementById("email").value.length == 0) {
        document.getElementById("emailError").innerHTML = "<em> You did not enter your email address </em>";
        document.getElementById("emailError").classList.add("text-danger");
        checkEmail = 0;
    } else {
        let emailPattern = /@/;
        if (emailPattern.test(document.getElementById("email").value)) {
            document.getElementById("emailError").innerHTML = "Valid";
            document.getElementById("emailError").classList.remove("text-danger");
            document.getElementById("emailError").classList.add("text-success");
            checkEmail = 1;
        } else {
            document.getElementById("emailError").innerHTML = "<em> Must be a valid email with '@' sign </em>";
            document.getElementById("emailError").classList.add("text-danger");
            checkEmail = 0;
        }
    }
    let phoneNum = document.getElementById("phone").value;
    if (phoneNum.length == 0) {
        document.getElementById("phoneError").innerHTML = "<em> You did not enter your phone number </em>";
        document.getElementById("phoneError").classList.add("text-danger");
        checkPhone = 0;
    } else {
        if (phoneNum.length != 10) {
            document.getElementById("phoneError").innerHTML = "<em> Must be exactly 10 digits </em>";
            document.getElementById("phoneError").classList.add("text-danger");
            checkPhone = 0;
        } else {
            let errorCheck = 0;
            for (let i = 0; i < phoneNum.length; i++) {
                if (!/^[0-9]+$/.test(phoneNum[i])) {
                    document.getElementById("phoneError").innerHTML = `<em> Contain character '${phoneNum[i]}'. Numbers only!</em>`;
                    document.getElementById("phoneError").classList.add("text-danger");
                    checkPhone = 0;
                    errorCheck += 1;
                }
            }
            if (errorCheck == 0) {
                document.getElementById("phoneError").innerHTML = "Valid";
                document.getElementById("phoneError").classList.remove("text-danger");
                document.getElementById("phoneError").classList.add("text-success");
                checkPhone = 1;
            }
        }
    }


    if (checkName + checkEmail + checkPhone == 3) {
        return true;
    }
    else {
        event.preventDefault();
        return false;
    }
}