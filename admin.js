/* Validation for login page */

let adminid = document.getElementById("adminid")
let password = document.getElementById("password")
let iderror = document.getElementById("iderror")
let passwderror = document.getElementById("passwderror")
let loginform = document.getElementById("loginform")

let idRegex = /^[a-zA-Z]{3}[0-9]{3}$/
let passwdRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/

loginform.addEventListener("submit", function (event) {
    event.preventDefault()

    let validate = true

    if (adminid.value.trim() === "") {
        iderror.textContent = "Admin ID is mandatory"
        validate = false
    } else if (!idRegex.test(adminid.value)) {
        iderror.textContent =
            "Admin ID must have first 3 letters and next 3 numbers"
        validate = false
    } else {
        iderror.textContent = ""
    }

    if (password.value.trim() === "") {
        passwderror.textContent = "Password is mandatory"
        validate = false
    } else if (!passwdRegex.test(password.value)) {
        passwderror.textContent =
            "Password should have at least 1 letter and 1 number"
        validate = false
    } else if (password.value.length !== 8) {
        passwderror.textContent = "Password should have 8 characters"
        validate = false
    } else {
        passwderror.textContent = ""
    }

    if (!validate) {
        return
    }

    alert("You have successfully logged into admin")
    window.location.href = "dashboard.html"
})