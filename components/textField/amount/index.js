import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const amountField = wrapper.querySelector('.ids2-text-field-amount');
    const amountFieldInput = wrapper.querySelector('.ids2-text-field-amount input');
    const clearButton = wrapper.querySelector('.ids2-text-field-amount .ids2-input-clear');


    amountFieldInput.addEventListener('input', (e) => {
        const count = e.target.value.length;
        count > 0 ? amountField.classList.add('ids2-text-field-filled') : amountField.classList.remove('ids2-text-field-filled');
        amountFieldInput.value = e.target.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });

    clearButton.addEventListener('click', () => {
        amountFieldInput.value = '';
        amountField.classList.remove('ids2-text-field-filled');
        amountFieldInput.focus();
    });

    return wrapper.firstElementChild;
}