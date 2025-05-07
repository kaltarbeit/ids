import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const textFields = wrapper.querySelectorAll('.ids-text-field');

    textFields.forEach(textField => {
        const textFieldInput = textField.querySelector('.ids-text-field input');
        const clearButton = textField.querySelector('.ids-text-field .ids-input-clear');
        textFieldInput.addEventListener('input', (e) => {
            const formattedValue = e.target.value.replace(/\D/g, "");
            const count = formattedValue.length;
            count > 0 ? textField.classList.add('ids-text-field-filled') : textField.classList.remove('ids-text-field-filled');
            e.target.value = formattedValue;
        });

        clearButton.addEventListener('click', () => {
            textFieldInput.value = '';
            textField.classList.remove('ids-text-field-filled');
            textFieldInput.focus();
        });
    });
    return wrapper.firstElementChild;
}