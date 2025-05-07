import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const textFields = wrapper.querySelectorAll('.ids-text-field');
    const textFieldInputs = wrapper.querySelectorAll('.ids-text-field input');

    textFields.forEach((textField, i) => {
        const textFieldInput = textField.querySelector('.ids-text-field input');
        const clearButton = textField.querySelector('.ids-text-field .ids-input-clear');
        textFieldInput.addEventListener('input', (e) => {
            const count = e.target.value.length;
            count > 0 ? textField.classList.add('ids-text-field-filled') : textField.classList.remove('ids-text-field-filled');

            if(count === 4 && i < textFieldInputs.length - 1) textFieldInputs[i + 1].focus();
        });

        textField.addEventListener('keydown', function (e) {
            if (e.key === 'Backspace' && e.target.value === '') {
                if(i > 0) textFieldInputs[i - 1].focus();
            }
        });

        clearButton.addEventListener('click', () => {
            textFieldInput.value = '';
            textField.classList.remove('ids-text-field-filled');
            textFieldInput.focus();
        });
    });

    return wrapper.firstElementChild;
}