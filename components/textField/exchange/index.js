import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const textFieldInputs = wrapper.querySelectorAll('.ids-text-field input');

    textFieldInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, "");
        })
    });

    return wrapper.firstElementChild;
}