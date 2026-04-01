function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

let button = document.querySelector('.fa-chevron-down')
button.addEventListener('click', scrollDown)