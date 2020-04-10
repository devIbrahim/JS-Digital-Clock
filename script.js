
const clock = document.querySelector(".clock");

const tick = () => {

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const d = now.getDate();
    const mo = now.getMonth();
    const y = now.getFullYear();

    const html = `
        <div id="time">
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>
        </div>
        <div id="date">
        <span>${d}</span> / <span>${mo}</span> / <span>${y}</span>
        </div>
    `;

    clock.innerHTML = html;

};

setInterval(tick, 1000);

const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {

    document.querySelector("body").classList.toggle("theme-change-body");
    clock.classList.toggle("dark");
    document.querySelector("footer span").classList.toggle("color-change");

});