const btnOpenModal = document.getElementById('open-modal');
const btnCloseModal = document.getElementById('close-modal')
const fade = document.querySelector('.fade')
const modal = document.getElementById('modal')

const def = [btnCloseModal, btnOpenModal, fade]

const toggleModal = () => {
    modal.classList.toggle('show')
    fade.classList.toggle('show')
}

def.forEach(function(el) {
    el.addEventListener('click', function() {
        toggleModal()
    })
})