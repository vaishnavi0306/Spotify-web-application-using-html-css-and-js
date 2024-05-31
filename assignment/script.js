document.addEventListener('DOMContentLoaded', function() {
    includeHTML();
    validateUsername();
});

function includeHTML() {
    var z, i, elmnt, file, xhr;
    z = document.querySelectorAll('[w3-include-html]');
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute('w3-include-html');
        if (file) {
            xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    elmnt.removeAttribute('w3-include-html');
                    includeHTML();
                }
            }      
            xhr.open("GET", file, true);
            xhr.send();
            return;
        }
    }
}

function validateUsername() {
    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('username-error');

    usernameInput.addEventListener('input', function() {
        const username = usernameInput.value;
        const isValid = /^[a-zA-Z0-9_]{3,15}$/.test(username);

        if (!isValid) {
            usernameError.textContent = "Username must be 3-15 characters and contain only letters, numbers, and underscores.";
        } else {
            usernameError.textContent = "";
        }
    });
}
