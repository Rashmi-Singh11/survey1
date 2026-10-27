document.getElementById("survey1-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const comments = document.getElementById("comments").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.querySelector('input[name="age"]:checked');
    const experience = document.querySelector('input[name="experience"]:checked');

    if (!name || !email || !phone || !gender || !age) {
        alert("Please fill in all required fields.");
        return;
    }

    const info = {
        name: name,
        email: email,
        phone: phone,
        comments: comments,
        gender: gender.value,
        age: age.value,
        experience: experience ? experience.value : ""
    };

    localStorage.setItem("surveyInfo", JSON.stringify(info));
    window.location.href = "thankyou.html";
});