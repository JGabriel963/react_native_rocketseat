const red = document.getElementById('red')
const green = document.getElementById('green')
const blue = document.getElementById('blue')

const colors = [red, green, blue]

const bodyRgb = function() {
    document.body.style.backgroundColor = `rgb(${document.getElementById('red').value}, ${document.getElementById('green').value}, ${document.getElementById('blue').value})`

    document.getElementById('output').innerText = `rgb(${document.getElementById('red').value}, ${document.getElementById('green').value}, ${document.getElementById('blue').value})`
}

colors.forEach(function(ev) {
    ev.addEventListener('input', bodyRgb)
})

