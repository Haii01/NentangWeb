const form =
    document.querySelector("#registerForm");

const nameInput =
    document.querySelector("#name");

const emailInput =
    document.querySelector("#email");

const passwordInput =
    document.querySelector("#password");

const confirmInput =
    document.querySelector("#confirmPassword");

const phoneInput =
    document.querySelector("#phone");

const submitBtn =
    document.querySelector("#submitBtn");

const nameStatus =
    document.querySelector("#nameStatus");

const emailError =
    document.querySelector("#emailError");

const confirmError =
    document.querySelector("#confirmError");

const phoneError =
    document.querySelector("#phoneError");

const strengthBar =
    document.querySelector("#strengthBar");

const strengthText =
    document.querySelector("#strengthText");

const modal =
    document.querySelector("#modal");

const userInfo =
    document.querySelector("#userInfo");

const closeModal =
    document.querySelector("#closeModal");

let validName = false;
let validEmail = false;
let validPassword = false;
let validConfirm = false;
let validPhone = false;

function validateName() {

    const value =
        nameInput.value.trim();

    validName =
        value.length >= 2 &&
        value.length <= 50;

    nameStatus.textContent =
        validName ? "✅" : "❌";

    checkForm();
}

function validateEmail() {

    const email =
        emailInput.value.trim();

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    validEmail =
        regex.test(email);

    if (validEmail) {

        emailError.textContent = "";

    } else {

        emailError.textContent =
            "Email không đúng định dạng";
    }

    checkForm();
}

function validatePassword() {

    const password =
        passwordInput.value;

    const hasUpper =
        /[A-Z]/.test(password);

    const hasLower =
        /[a-z]/.test(password);

    const hasNumber =
        /\d/.test(password);

    const hasSpecial =
        /[^A-Za-z0-9]/.test(password);

    if (password.length < 8) {

        strengthBar.style.width = "33%";
        strengthBar.style.background = "red";

        strengthText.textContent =
            "Yếu";

        validPassword = false;
    } else if (
        password.length >= 8 &&
        /[a-zA-Z]/.test(password) &&
        hasNumber
    ) {

        strengthBar.style.width = "66%";
        strengthBar.style.background = "orange";

        strengthText.textContent =
            "Trung bình";

        validPassword = true;
    }

    if (
        password.length >= 8 &&
        hasUpper &&
        hasLower &&
        hasNumber &&
        hasSpecial
    ) {

        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";

        strengthText.textContent =
            "Mạnh";

        validPassword = true;
    }

    validateConfirm();
    checkForm();
}

function validateConfirm() {

    validConfirm =
        passwordInput.value ===
        confirmInput.value &&
        confirmInput.value !== "";

    confirmError.textContent =
        validConfirm ?
        "" :
        "Mật khẩu không khớp";

    checkForm();
}

function formatPhone() {

    let value =
        phoneInput.value
        .replace(/\D/g, "");

    value =
        value.substring(0, 10);

    if (value.length > 4) {

        value =
            value.replace(
                /(\d{4})(\d+)/,
                "$1-$2"
            );
    }

    if (value.length > 9) {

        value =
            value.replace(
                /(\d{4})-(\d{3})(\d+)/,
                "$1-$2-$3"
            );
    }

    phoneInput.value = value;

    validPhone =
        value.length === 12;

    phoneError.textContent =
        validPhone ?
        "" :
        "Số điện thoại phải đủ 10 số";

    checkForm();
}

function checkForm() {

    submitBtn.disabled = !(
        validName &&
        validEmail &&
        validPassword &&
        validConfirm &&
        validPhone
    );
}

nameInput.addEventListener(
    "input",
    validateName
);

emailInput.addEventListener(
    "input",
    validateEmail
);

passwordInput.addEventListener(
    "input",
    validatePassword
);

confirmInput.addEventListener(
    "input",
    validateConfirm
);

phoneInput.addEventListener(
    "input",
    formatPhone
);

form.addEventListener(
    "submit",
    e => {

        e.preventDefault();

        userInfo.textContent =
            `Tên: ${nameInput.value}
     | Email: ${emailInput.value}
     | Phone: ${phoneInput.value}`;

        modal.classList.remove(
            "hidden"
        );

    });
closeModal.addEventListener(
    "click",
    () => {
        modal.classList.add(
            "hidden"
        );
    });