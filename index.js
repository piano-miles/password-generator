/*
Include multiple letter cases, numbers, and symbols.
Don’t use dictionary words or commonly combined dictionary words.
Don’t use obvious number/letter substitutions.
Create a password that’s at least 12 characters in length.
*/

const all = ["aeiou", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!\"#$%&'*+,./:;=?@\\^`|~[]{}()<>"];

// Randomly select from the list
const randomSelect = l => l[Math.floor(Math.random() * l.length)];

const generatePassword = () => {
    let check = 0;
    let password = "";
    while (check == 0) {
        password = "";
        var char;
        var type = 2;
        for (let i = 0; i < 18; i++) {
            if (Math.random() > 0.2) {
                if (Math.random() > type ^ 0 ? 0.7 : 0.4) {
                    // lower case
                    type = 2;
                    char = randomSelect(all[type]);
                } else {
                    // vowels
                    type = 0;
                    char = randomSelect(all[type]);
                }
            } else {
                check++;
                if (Math.random() > 0.3) {
                    type = 1;
                    char = randomSelect(all[type]);
                } else {
                    if (Math.random() > 0.4) {
                        type = 3;
                        char = randomSelect(all[type]);
                    } else {
                        type = 4;
                        char = randomSelect(all[type]);
                    }
                }
            }
            password += char;
            if (i == 5 || i == 11) password += "-";
        }
    }
    display.innerHTML = password;
};

const display = document.getElementById("password");
const generate = document.getElementById("generate");
generate.addEventListener("click", generatePassword);