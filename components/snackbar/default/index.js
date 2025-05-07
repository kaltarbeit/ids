import html from '!!raw-loader!./index.html';


export const createSnackbar = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const popup = wrapper.querySelector('.ids-snackbar');
    const openButton = wrapper.querySelector('.ids-snackbar-examples-open-button');
    const closeButtons = wrapper.querySelectorAll('.ids-snackbar-close');

    closeButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            popup.classList.add('ids-snackbar-hide');
        });
    });

    openButton.addEventListener('click', () => {
        setTimeout(() => {
            popup.classList.remove('ids-snackbar-hide');
        }, 10);
    });

    return wrapper.firstElementChild;
}