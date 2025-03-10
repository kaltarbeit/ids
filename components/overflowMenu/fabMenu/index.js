import html from '!!raw-loader!./index.html';


export const createOverflowMenu = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const fabToggle = wrapper.querySelector(".ids2-fab-menu-toggle");
    const fabMenu = wrapper.querySelector(".ids2-fab-menu");
    const backdrop = wrapper.querySelector('.ids2-backdrop');

    fabToggle.addEventListener("click", () => {
        fabMenu.classList.toggle("show");

        if(fabMenu.classList.contains('show')) {
            backdrop.style.display = 'block';
            setTimeout(() => {
                backdrop.classList.remove('ids2-backdrop-hide');
            });
        } else {
            setTimeout(() => {
                backdrop.classList.add('ids2-backdrop-hide');
            });
        }
    });

    backdrop.addEventListener('transitionend', () => {
        if(backdrop.classList.contains('ids2-backdrop-hide'))
            backdrop.style.display = 'none';
    });

    return wrapper.firstElementChild;
}