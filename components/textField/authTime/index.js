import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const textField = wrapper.querySelector('.ids2-text-field');
    const textFieldInput = wrapper.querySelector('.ids2-text-field input');
    const clearButton = wrapper.querySelector('.ids2-text-field .ids2-input-clear');
    const counter = wrapper.querySelector('.ids2-text-field-counter');


    textFieldInput.addEventListener('focus', () => {
        textField.classList.add('ids2-text-field-focused');
    });

    textFieldInput.addEventListener('blur', () => {
        if(textFieldInput.value.length === 0) {
            textField.classList.remove('ids2-text-field-focused');
        }
    });

    textFieldInput.addEventListener('input', (e) => {
        const count = e.target.value.length;
        count > 0 ? textField.classList.add('ids2-text-field-filled') : textField.classList.remove('ids2-text-field-filled');

        if(counter) {
            const countWrapper = counter.querySelector('.ids2-text-field-count');
            countWrapper.textContent = count;
        }
    });

    clearButton.addEventListener('click', () => {
        textFieldInput.value = '';
        textField.classList.remove('ids2-text-field-filled');
        textFieldInput.focus();
    });

    if(counter) {
        const maxLength = counter.querySelector('.ids2-text-field-maxlength');
        maxLength.textContent = textFieldInput.maxLength;
    }

    return wrapper.firstElementChild;
}