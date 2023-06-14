"use strict"
function generatePassword() {
    var length = document.getElementById("length").value;
    var lowercase = document.getElementById("lowercase").checked;
    var uppercase = document.getElementById("uppercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var specialChars = document.getElementById("specialChars").checked;

    var charset = "";
    var password = "";

    if (lowercase) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }

    if (uppercase) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (numbers) {
        charset += "0123456789";
    }

    if (specialChars) {
        charset += "!@#$%^&*()";
    }

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").value = password;
}
function copyPassword() {
    var passwordInput = document.getElementById("password");
    var password = passwordInput.value;

    navigator.clipboard.writeText(password)
        .then(function () {
            var copyButton = document.getElementById("copyButton");
            copyButton.classList.add("copied");

            setTimeout(function () {
                copyButton.classList.remove("copied");
            }, 1000);
        })
        .catch(function (error) {
            console.error("Error al copiar la contraseña:", error);
        });
}
//Alternar modo oscuro/claro
var modoOscuro = true; // el modo oscuro como predeterminado

function alternarTema() {
    var body = document.body;
    body.classList.toggle("modo-oscuro");

    if (modoOscuro) {
        modoOscuro = false;
        document.getElementById("alternarTema").textContent = "Modo oscuro";
    } else {
        modoOscuro = true;
        document.getElementById("alternarTema").textContent = "Modo claro";
    }
}

window.addEventListener("DOMContentLoaded", function () { //verifica como es el estado del modo oscuro
    var body = document.body;

    if (modoOscuro) {
        body.classList.add("modo-oscuro");
        document.getElementById("alternarTema").textContent = "Modo claro";
    } else {
        document.getElementById("alternarTema").textContent = "Modo oscuro";
    }
});
