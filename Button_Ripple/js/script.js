const buttons = document.querySelectorAll('.button');
buttons.forEach(function(element) {
    element.addEventListener('click', function(ev) {
        ev.preventDefault();

        const overlay = document.createElement('span')
        overlay.classList.add("overlay");

        const x = ev.clientX - ev.target.offsetLeft;
        const y = ev.clientY - ev.target.offsetTop;

        overlay.style.left = x + "px";
        overlay.style.top = y + "px";

        ev.target.appendChild(overlay)

        setTimeout(() => {
            overlay.remove();
        }, 500); // remove overlay after .5s of click
    });
})