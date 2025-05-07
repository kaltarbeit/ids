import html from '!!raw-loader!./index.html';


export const createTopNavigation = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const textFieldInput = wrapper.querySelector('.ids-text-field input');
    const clearButton = wrapper.querySelector('.ids-text-field .ids-input-clear');

    textFieldInput.addEventListener('input', (e) => {
        const count = e.target.value.length;

        count > 0 ? textFieldInput.parentElement.classList.add('ids-text-field-filled') : textFieldInput.parentElement.classList.remove('ids-text-field-filled');
    });

    clearButton.addEventListener('click', () => {
        textFieldInput.value = '';
        textFieldInput.parentElement.classList.remove('ids-text-field-filled');
        textFieldInput.focus();
    });

    return wrapper.firstElementChild;
}