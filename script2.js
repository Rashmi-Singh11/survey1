window.onload = function() {
    const savedInfo = localStorage.getItem("surveyInfo");
    if (savedInfo) {
        const info = JSON.parse(savedInfo);
        document.getElementById("display-name").textContent = info.name;
        document.getElementById("display-email").textContent = info.email;
        document.getElementById("display-phone").textContent = info.phone;
        document.getElementById("display-gender").textContent = info.gender;
        document.getElementById("display-age").textContent = info.age;
        document.getElementById("display-experience").textContent = info.experience;
        document.getElementById("display-comments").textContent = info.comments;
    }
};