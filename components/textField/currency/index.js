import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const textField = wrapper.querySelector('.ids2-text-field-currency');
    const textFieldInput = wrapper.querySelector('.ids2-text-field-currency input');
    const clearButton = wrapper.querySelector('.ids2-text-field .ids2-input-clear');

    document.addEventListener("wheel", function(){
        if(document.activeElement.type === "number"){
            document.activeElement.blur();
        }
    });

    textFieldInput.addEventListener('input', (e) => {
        const amounts = String((Number(e.target.value.replace(/\D/g, "")) / 100).toFixed(2)).split('.');
        e.target.value = amounts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + amounts[1];
        const count = e.target.value.length;
        count > 0 ? textField.classList.add('ids2-text-field-filled') : textField.classList.remove('ids2-text-field-filled');
    });

    clearButton.addEventListener('click', () => {
        textFieldInput.value = '';
        textField.classList.remove('ids2-text-field-filled');
        textFieldInput.focus();
    });

    return wrapper.firstElementChild;
}