// ---------- LOGIN ----------
async function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "" || password == "") {
        alert("Please fill all fields!");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
    }

    try {
        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: password })
        });
        const result = await res.json();

        if (res.ok) {
            localStorage.setItem("token", result.token);
            alert(result.message);
            window.location.href = "dashboard.html";
        } else {
            alert(result.message);
        }
    } catch (err) {
        alert("Server se connect nahi ho paya");
    }
}

// ---------- SIGNUP ----------
async function signup() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (firstname == "" || lastname == "" || email == "" || password == "") {
        alert("Please fill all fields!");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
    }
    if (!email.includes("@")) {
        alert("Please enter a valid email!");
        return;
    }

    try {
        const res = await fetch("/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstName: firstname, lastName: lastname, email: email, password: password })
        });
        const result = await res.json();
        alert(result.message);

        if (res.ok) {
            window.location.href = "index.html";
        }
    } catch (err) {
        alert("Server se connect nahi ho paya");
    }
}

// ---------- DASHBOARD ----------
async function loadDashboard() {
    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "index.html";
        return;
    }

    const res = await fetch("/api/me", {
        headers: { "Authorization": "Bearer " + token }
    });

    if (!res.ok) {
        localStorage.removeItem("token");
        window.location.href = "index.html";
        return;
    }

    const user = await res.json();
    document.getElementById("name").innerText = user.firstName;
}

function logout() {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    window.location.href = "index.html";
}// ---------- LOGIN ----------
async function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "" || password == "") {
        alert("Please fill all fields!");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
    }

    try {
        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: password })
        });
        const result = await res.json();

        if (res.ok) {
            localStorage.setItem("token", result.token);
            alert(result.message);
            window.location.href = "dashboard.html";
        } else {
            alert(result.message);
        }
    } catch (err) {
        alert("Server se connect nahi ho paya");
    }
}

// ---------- SIGNUP ----------
async function signup() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (firstname == "" || lastname == "" || email == "" || password == "") {
        alert("Please fill all fields!");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
    }
    if (!email.includes("@")) {
        alert("Please enter a valid email!");
        return;
    }

    try {
        const res = await fetch("/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstName: firstname, lastName: lastname, email: email, password: password })
        });
        const result = await res.json();
        alert(result.message);

        if (res.ok) {
            window.location.href = "index.html";
        }
    } catch (err) {
        alert("Server se connect nahi ho paya");
    }
}

// ---------- DASHBOARD ----------
async function loadDashboard() {
    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "index.html";
        return;
    }

    const res = await fetch("/api/me", {
        headers: { "Authorization": "Bearer " + token }
    });

    if (!res.ok) {
        localStorage.removeItem("token");
        window.location.href = "index.html";
        return;
    }

    const user = await res.json();
    document.getElementById("name").innerText = user.firstName;
}

function logout() {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    window.location.href = "index.html";
}