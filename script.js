document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name && email && password) {
        localStorage.setItem("user", JSON.stringify({name, email, password}));
        document.getElementById("msg").innerHTML = "Signup Successful";
    }
    else {
        document.getElementById("msg").innerHTML = "Fill all fields";
    }
};