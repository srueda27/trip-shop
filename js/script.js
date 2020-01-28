const menu = document.getElementById('menu')

menu.addEventListener('click', () => {
    document.getElementById('menu-text').classList.toggle('inactive');
    document.getElementById('menu-text-close').classList.toggle('active');
    document.getElementById('collapseExample').classList.toggle('active');
});


