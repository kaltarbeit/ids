import html from '!!raw-loader!./index.html';


export const createPopup = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const popup = wrapper.querySelector('.ids2-popup-full');
    const backdrop = wrapper.querySelector('.ids2-backdrop');
    const openButton = wrapper.querySelector('.ids2-popup-examples-open-button');
    const closeButtons = wrapper.querySelectorAll('.ids2-button, .ids2-popup-navigation-close');

    closeButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            popup.classList.add('ids2-popup-full-hide');
            backdrop.classList.add('ids2-backdrop-hide');
        });
    });

    openButton.addEventListener('click', (e) => {
        backdrop.style.display = 'block';
        popup.style.display = 'block';

        setTimeout(() => {
            popup.classList.remove('ids2-popup-full-hide');
            backdrop.classList.remove('ids2-backdrop-hide');
        }, 10);
    });

    backdrop.addEventListener('transitionend', () => {
        if(backdrop.classList.contains('ids2-backdrop-hide'))
            backdrop.style.display = 'none';
    });

    popup.addEventListener('transitionend', () => {
        if(popup.classList.contains('ids2-popup-full-hide'))
            popup.style.display = 'none';
    });


    return wrapper.firstElementChild;
}