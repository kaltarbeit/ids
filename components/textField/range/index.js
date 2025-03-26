import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const textFields = wrapper.querySelectorAll('.ids2-text-field');

    textFields.forEach(textField => {
        const textFieldInput = textField.querySelector('.ids2-text-field input');
        const clearButton = textField.querySelector('.ids2-text-field .ids2-input-clear');
        textFieldInput.addEventListener('input', (e) => {
            const count = e.target.value.length;
            count > 0 ? textField.classList.add('ids2-text-field-filled') : textField.classList.remove('ids2-text-field-filled');
        });

        clearButton.addEventListener('click', () => {
            textFieldInput.value = '';
            textField.classList.remove('ids2-text-field-filled');
            textFieldInput.focus();
        });
    });

    return wrapper.firstElementChild;
}