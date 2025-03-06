import html from '!!raw-loader!./index.html';


export const createBottomNavigation = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const navItems = wrapper.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(item => item.classList.remove('active'));
            item.classList.add('active');
        })
    });

    return wrapper.firstElementChild;
}