import html from '!!raw-loader!./index.html';


export const createTextArea = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const textarea = wrapper.querySelector('.ids-text-area-input');
    const textareaWrapper = textarea.parentElement;
    const clearButton = wrapper.querySelector('.ids-text-area-clear');
    const countArea = wrapper.querySelector('.ids-text-area-count');
    const maxLengthArea = wrapper.querySelector('.ids-text-area-max-length');

    maxLengthArea.innerHTML = textarea.maxLength;

    textarea.addEventListener('input', (e) => {
        const count = e.target.value.length;
        count > 0 ? textareaWrapper.classList.add('ids-text-area-filled') : textareaWrapper.classList.remove('ids-text-area-filled');

        countArea.innerHTML = count;

    });

    clearButton.addEventListener('click', () => {
        textarea.value = '';
        textareaWrapper.classList.remove('ids-text-area-filled');
        textarea.focus();
    });

    return wrapper.firstElementChild;
}