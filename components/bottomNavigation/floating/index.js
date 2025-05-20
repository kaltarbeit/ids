import html from '!!raw-loader!./index.html';


export const createBottomNavigation = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const navItems = wrapper.querySelectorAll('.ids-bottom-nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(item => item.classList.remove('ids-bottom-nav-item-active'));
            item.classList.add('ids-bottom-nav-item-active');
        })
    });

    return wrapper.firstElementChild;
}