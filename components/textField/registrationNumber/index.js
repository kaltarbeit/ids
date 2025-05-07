import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);
    const textFieldInputs = wrapper.querySelectorAll('.ids-text-field input');

    textFieldInputs[0].addEventListener('input', (e) => {
        const formattedValue = e.target.value.replace(/\D/g, "");
        const count = formattedValue.length;
        e.target.value = formattedValue;
        if(count === 6) textFieldInputs[1].focus();
    })

    textFieldInputs[1].addEventListener('input', (e) => {
        const formattedValue = e.target.value.replace(/\D/g, "");
        e.target.value = formattedValue;
    })

    textFieldInputs[1].addEventListener('keydown', function (e) {
        if (e.key === 'Backspace' && e.target.value === '') {
            textFieldInputs[0].focus();
        }
    });

    return wrapper.firstElementChild;
}