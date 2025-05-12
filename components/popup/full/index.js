import html from '!!raw-loader!./index.html';


export const createPopup = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const popup = wrapper.querySelector('.ids-popup-full');
    const backdrop = wrapper.querySelector('.ids-dimmed');
    const openButton = wrapper.querySelector('.ids-popup-examples-open-button');
    const closeButtons = wrapper.querySelectorAll('.ids-button, .ids-popup-navigation-close');

    closeButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            popup.classList.add('ids-popup-full-hide');
            backdrop.classList.add('ids-dimmed-hide');
        });
    });

    openButton.addEventListener('click', (e) => {
        backdrop.style.display = 'block';
        popup.style.display = 'block';

        setTimeout(() => {
            popup.classList.remove('ids-popup-full-hide');
            backdrop.classList.remove('ids-dimmed-hide');
        }, 10);
    });

    backdrop.addEventListener('transitionend', () => {
        if(backdrop.classList.contains('ids-dimmed-hide'))
            backdrop.style.display = 'none';
    });

    popup.addEventListener('transitionend', () => {
        if(popup.classList.contains('ids-popup-full-hide'))
            popup.style.display = 'none';
    });


    return wrapper.firstElementChild;
}