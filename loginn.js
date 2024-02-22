const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



var typed = new Typed(".info", {
    strings: ["<span style='color: #9a719d;'>Tummy</span>", "<span style='color: #9a719d;'>Healthy</span>", "<span style='color: #9a719d;'>Yummy</span>"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});