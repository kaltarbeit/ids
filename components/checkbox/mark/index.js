import html from '!!raw-loader!./index.html';


export const createCheckbox = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const checkboxCard = wrapper.querySelector('.ids-checkbox-card');

    checkboxCard.addEventListener('click', () => {
        checkboxCard.classList.toggle('ids-checkbox-card-checked');
    })

    return wrapper.firstElementChild;
}