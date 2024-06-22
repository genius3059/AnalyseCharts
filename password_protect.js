const passwords = ['Deepesh1', 'Umesh2', 'Rohit3', 'Vikas0']; // Set your passwords here

function checkPassword() {
    const password = document.getElementById("password").value;
    if (passwords.includes(password)) {
        window.location.href = "protected_page.html";
    } else {
        document.getElementById("error-message").style.display = "block";
    }
}

