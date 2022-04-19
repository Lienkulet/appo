let menuBtn = document.getElementById('collapseBtnId');
let menu = document.getElementById('navMenuItemsId');

menuBtn.onclick = () => {
    menu.classList.toggle('open');
}