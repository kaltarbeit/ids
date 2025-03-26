import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const textField = wrapper.querySelector('.ids2-text-field');
    const textFieldInput = wrapper.querySelector('.ids2-text-field input');
    const clearButton = wrapper.querySelector('.ids2-text-field .ids2-input-clear');
    const counter = wrapper.querySelector('.ids2-text-field-counter');

    textFieldInput.addEventListener('input', (e) => {
        const count = e.target.value.length;
        count > 0 ? textField.classList.add('ids2-text-field-filled') : textField.classList.remove('ids2-text-field-filled');

        textFieldInput.value = textFieldInput.value.replace(/\D/g, '')
            .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

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