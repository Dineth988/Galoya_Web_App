const body = document.querySelector("body"),
sidebar = body.querySelector(".sidebar"),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode.text");

const toggleBtn = document.querySelector('.toggle');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});

// Dark mode toggle
const modeToggle = document.querySelector('.mode');

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const switchBtn = document.querySelector('.switch');
    if (body.classList.contains('dark')) {
        switchBtn.style.transform = 'translateX(20px)';
    } else {
        switchBtn.style.transform = 'translateX(0)';
    }
});

     