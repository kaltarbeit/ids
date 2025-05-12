import html from '!!raw-loader!./index.html';

export const createDrawer = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const drawer = wrapper.querySelector('.ids-drawer');
    const backdrop = wrapper.querySelector('.ids-dimmed');
    const closeButton = wrapper.querySelector('.ids-drawer-close');
    const menuButton = wrapper.querySelector('.ids-navigation-example');

    menuButton.addEventListener('click', () => {
        drawer.style.display = 'block';
        backdrop.style.display = 'block';
        setTimeout(() => {
            drawer.classList.remove('ids-drawer-hide');
            backdrop.classList.remove('ids-dimmed-hide');
        }, 10);
    });

    closeButton.addEventListener('click', () => {
        drawer.classList.add('ids-drawer-hide');
        backdrop.classList.add('ids-dimmed-hide');
    });

    drawer.addEventListener('transitionend', () => {
        if(drawer.classList.contains('ids-drawer-hide'))
            drawer.style.display = 'none';
    });

    backdrop.addEventListener('transitionend', () => {
        if(backdrop.classList.contains('ids-dimmed-hide'))
            backdrop.style.display = 'none';
    });

    return wrapper.firstElementChild;
}