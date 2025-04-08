import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const textFields = wrapper.querySelectorAll('.ids2-text-field');

    textFields.forEach((el) => {
        const textFieldInput = el.querySelector('.ids2-text-field input');
        const clearButton = el.querySelector('.ids2-text-field .ids2-input-clear');
        const counter = el.querySelector('.ids2-text-field-counter');

        textFieldInput.addEventListener('input', (e) => {
            const count = e.target.value.length;
            count > 0 ? el.classList.add('ids2-text-field-filled') : el.classList.remove('ids2-text-field-filled');

            if(counter) {
                const countWrapper = counter.querySelector('.ids2-text-field-count');
                countWrapper.textContent = count;
            }
        });

        clearButton.addEventListener('click', () => {
            textFieldInput.value = '';
            el.classList.remove('ids2-text-field-filled');
            textFieldInput.focus();
        });

        if(counter) {
            const maxLength = counter.querySelector('.ids2-text-field-maxlength');
            maxLength.textContent = textFieldInput.maxLength;
        }
    });

    return wrapper.firstElementChild;
}