import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const textField = wrapper.querySelector('.ids-text-field');
    const textFieldInput = wrapper.querySelector('.ids-text-field input');
    const clearButton = wrapper.querySelector('.ids-text-field .ids-input-clear');
    const counter = wrapper.querySelector('.ids-text-field-counter');

    textFieldInput.addEventListener('input', (e) => {
        const count = e.target.value.length;
        count > 0 ? textField.classList.add('ids-text-field-filled') : textField.classList.remove('ids-text-field-filled');

        if(counter) {
            const countWrapper = counter.querySelector('.ids-text-field-count');
            countWrapper.textContent = count;
        }
    });

    clearButton.addEventListener('click', () => {
        textFieldInput.value = '';
        textField.classList.remove('ids-text-field-filled');
        textFieldInput.focus();
    });

    if(counter) {
        const maxLength = counter.querySelector('.ids-text-field-maxlength');
        maxLength.textContent = textFieldInput.maxLength;
    }

    return wrapper.firstElementChild;
}