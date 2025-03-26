import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const textField = wrapper.querySelector('.ids2-text-field');
    const textFieldInput = wrapper.querySelector('.ids2-text-field input');

    textFieldInput.addEventListener('input', (e) => {

        const formattedValue = e.target.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const count = formattedValue.length;
        count > 0 ? textField.classList.add('ids2-text-field-filled') : textField.classList.remove('ids2-text-field-filled');

        textFieldInput.value =  formattedValue;
    });

    return wrapper.firstElementChild;
}