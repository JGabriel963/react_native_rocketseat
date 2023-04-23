let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('seconds');

let clock = setInterval(
    function time() {

        let dateNow = new Date();
        let hr = dateNow.getHours();
        let min = dateNow.getMinutes();
        let s = dateNow.getSeconds();

        if (hr < 10) {
            hr = "0" + hr;
        }
        if (s < 10) {
            s = "0" + s;
        }

        hour.textContent = hr
        minute.textContent = min
        second.textContent = s

    }, 1000

);