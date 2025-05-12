import html from '!!raw-loader!./index.html';


export const createOverflowMenu = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const fabToggle = wrapper.querySelector(".ids-fab-menu-toggle");
    const fabMenu = wrapper.querySelector(".ids-fab-menu");
    const backdrop = wrapper.querySelector('.ids-dimmed');

    fabToggle.addEventListener("click", () => {
        fabMenu.classList.toggle("show");

        if(fabMenu.classList.contains('show')) {
            backdrop.style.display = 'block';
            setTimeout(() => {
                backdrop.classList.remove('ids-dimmed-hide');
            });
        } else {
            setTimeout(() => {
                backdrop.classList.add('ids-dimmed-hide');
            });
        }
    });

    backdrop.addEventListener('transitionend', () => {
        if(backdrop.classList.contains('ids-dimmed-hide'))
            backdrop.style.display = 'none';
    });

    return wrapper.firstElementChild;
}