import html from '!!raw-loader!./index.html';


export const createRadio = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const radioBoxes = wrapper.querySelectorAll('.ids2-radio-box');

    radioBoxes.forEach(radioBox => {
        radioBox.addEventListener('click', () => {

            radioBoxes.forEach(anotherRadioBox => {
                if (anotherRadioBox === radioBox) return;
                    anotherRadioBox.classList.remove('ids2-radio-box-checked');
            });

            radioBox.classList.toggle('ids2-radio-box-checked');
        })
    });

    return wrapper.firstElementChild;
}