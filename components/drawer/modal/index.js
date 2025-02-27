import html from '!!raw-loader!./index.html';

export const createDrawer = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const drawer = wrapper.querySelector('.ids2-drawer');
    const backdrop = wrapper.querySelector('.ids2-backdrop');
    const closeButton = wrapper.querySelector('.ids2-drawer-close');
    const menuButton = wrapper.querySelector('.ids2-navigation-example');

    menuButton.addEventListener('click', () => {
        drawer.style.display = 'block';
        backdrop.style.display = 'block';
        setTimeout(() => {
            drawer.classList.remove('ids2-drawer-hide');
            backdrop.classList.remove('ids2-backdrop-hide');
        }, 10);
    });

    closeButton.addEventListener('click', () => {
        drawer.classList.add('ids2-drawer-hide');
        backdrop.classList.add('ids2-backdrop-hide');
    });

    drawer.addEventListener('transitionend', () => {
        if(drawer.classList.contains('ids2-drawer-hide'))
            drawer.style.display = 'none';
    });

    backdrop.addEventListener('transitionend', () => {
        if(backdrop.classList.contains('ids2-backdrop-hide'))
            backdrop.style.display = 'none';
    });

    return wrapper.firstElementChild;
}