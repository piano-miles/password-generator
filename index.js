/*
This program generates a password that:
- contains non-lowercase-letter characters,
- is 18 characters long, with chunks of 6 separated by dashes, and
- attempts to be somewhat pronounceable and memorable.
*/

const all = ["aeiou", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!\"#$%&'*+,./:;=?@\\^`|~[]{}()<>"];

// Select a random character from string
randChar = e => e[Math.floor(Math.random() * e.length)];

generatePassword = () => {
    // The count of lowercase characters is tracked to prevent the password from being unsecure.
    let e = 0, // Count of lowercase vowels
        a = ""; // The password
    // Loop until the password is valid
    for (; 0 == e;) {
        var t; // The current character
        a = "";
        var l = 2;
        for (let n = 0; n < 18; n++)
            Math.random() > .2
                ? t = Math.random() > l ^ 0 || .4
                    ? randChar(all[l = 2])
                    : randChar(all[l = 0])
                : (e++, t = Math.random() > .3
                    ? randChar(all[l = 1])
                    : Math.random() > .4
                        ? randChar(all[l = 3])
                        : randChar(all[l = 4])),
                a += t, // Append the character to the password
                5 ^ n && 11 ^ n || (a += "-"); // Add dashes between chunks of 6 characters
    }
    display.innerHTML = a; // Display the password
};

display = document.getElementById("password");
generate = document.getElementById("generate");
generate.addEventListener("click", generatePassword);