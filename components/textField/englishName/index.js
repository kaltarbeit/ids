import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const textFields = wrapper.querySelectorAll('.ids-text-field');

    textFields.forEach((el) => {
        const textFieldInput = el.querySelector('.ids-text-field input');
        const clearButton = el.querySelector('.ids-text-field .ids-input-clear');
        const counter = el.querySelector('.ids-text-field-counter');

        textFieldInput.addEventListener('input', (e) => {
            const count = e.target.value.length;
            count > 0 ? el.classList.add('ids-text-field-filled') : el.classList.remove('ids-text-field-filled');

            if(counter) {
                const countWrapper = counter.querySelector('.ids-text-field-count');
                countWrapper.textContent = count;
            }
        });

        clearButton.addEventListener('click', () => {
            textFieldInput.value = '';
            el.classList.remove('ids-text-field-filled');
            textFieldInput.focus();
        });

        if(counter) {
            const maxLength = counter.querySelector('.ids-text-field-maxlength');
            maxLength.textContent = textFieldInput.maxLength;
        }
    });

    return wrapper.firstElementChild;
}