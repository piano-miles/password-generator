const src = "https://github.com/piano-miles/password-generator";

try {
    let z = document.createElement("main");
    z.innerHTML =
        `<div class="vertical-pad">
            <header>
                <h1>Password Generator</h1>
            </header>

            <main>
                <h2 id="password">----</h2>

                <div class="buttons">
                    <button id="generate">Generate Password</button> <button id="copy">Copy to Clipboard</button>
                </div>
                <a href="${src}">
                    <button id="source">View Source</button>
                </a>
            </main>
        </div>`
    document.body.appendChild(z);
} catch (e) {
    Swal.fire({
        title: "Error!",
        text: "An error occurred while creating the page (code 1).\nPlease report this at https://github.com/piano-miles/password-generator/issues and paste this entire message.\n" + e,
        icon: "error",
        confirmButtonText: "Ok."
    });
}

const x = ["aeiou", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!\"#$%&'*+,./:;=?@\\^`|~[]{}()<>"];

// Select a random character from string
const randChar = e => e[Math.floor(Math.random() * e.length)];

const generatePassword = () => {
    try {
        // The count of lowercase characters is tracked to prevent the password from being unsecure.
        let e = 0, // Count of lowercase vowels
            a = ""; // The password
        // Loop until the password is valid
        for (; 0 == e;) {
            let t, l = 2; // t is the current character, l is the char type (vowel/uppercase/lowercase/number/symbol)
            a = "";
            for (let n = 0; n < 18; n++)
                Math.random() > .2 ?
                    t = Math.random() > l ^ 0 || .4 ?
                        randChar(x[l = 2]) :
                        randChar(x[l = 0]) : (
                        e++,
                        t = Math.random() > .3 ?
                            randChar(x[l = 1]) :
                            Math.random() > .4 ?
                                randChar(x[l = 3]) :
                                randChar(x[l = 4])),
                    a += t, // Append the character to the password
                    5 ^ n && 11 ^ n || (a += "-"); // Add dashes between chunks of 6 characters
        }
        display.innerHTML = a; // Display the password
    } catch (e) {
        Swal.fire({
            title: "Error!",
            text: "An error occurred while generating a password (code 2).\nPlease report this at https://github.com/piano-miles/password-generator/issues and paste this entire message.\n" + e,
            icon: "error",
            confirmButtonText: "Ok."
        });
    }
};

const display = document.getElementById("password");
const generate = document.getElementById("generate");
const copy = document.getElementById("copy");

generate.addEventListener("click", generatePassword);
copy.addEventListener("click", () => {
    try {
        const e = document.createElement("textarea");
        e.value = display.innerHTML,
            document.body.appendChild(e),
            e.select(),
            e.setSelectionRange(0, 99999), // For mobile devices
            //document.execCommand("copy"), // Deprecated
            navigator.clipboard.writeText(e.value),
            document.body.removeChild(e),
            Swal.fire({
                title: "Copied!",
                text: "The password has been copied to your clipboard.",
                icon: "success",
                confirmButtonText: "Ok!"
            });
    } catch (e) {
        Swal.fire({
            title: "Error!",
            text: "An error occurred while copying the text (code 3).\nPlease report this at https://github.com/piano-miles/password-generator/issues and paste this entire message.\n" + e,
            icon: "error",
            confirmButtonText: "Ok."
        });
    }
});

generatePassword();