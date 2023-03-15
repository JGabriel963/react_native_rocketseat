const body = document.querySelector('body'),
toggle = document.querySelector('.toggle')

toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    body.classList.toggle('dark')
})