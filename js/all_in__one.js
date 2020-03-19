const getNavbar = document.getElementById('nav-custom');
window.onscroll = () => {
    const y = scrollY;
    if (y >= 300) {
        getNavbar.classList.remove('position-absolute');
        getNavbar.classList.add('fixed-top');
    } else {
        getNavbar.classList.remove('fixed-top');
        getNavbar.classList.add('position-absolute')
    }
}