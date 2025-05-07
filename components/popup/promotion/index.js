import html from '!!raw-loader!./index.html';


export const createPopup = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const popup = wrapper.querySelector('.ids-popup');
    const backdrop = wrapper.querySelector('.ids-backdrop');
    const openButton = wrapper.querySelector('.ids-popup-examples-open-button');
    const closeButtons = wrapper.querySelectorAll('.ids-button, input[name="checkbox"]');

    closeButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            popup.classList.add('ids-popup-hide');
            backdrop.classList.add('ids-backdrop-hide');
        });
    });

    openButton.addEventListener('click', (e) => {
        backdrop.style.display = 'block';

        setTimeout(() => {
            popup.classList.remove('ids-popup-hide');
            backdrop.classList.remove('ids-backdrop-hide');
        }, 10);
    });

    backdrop.addEventListener('transitionend', () => {
        if(backdrop.classList.contains('ids-backdrop-hide'))
            backdrop.style.display = 'none';
    });


    return wrapper.firstElementChild;
}