import html from '!!raw-loader!./index.html';

export const createInputStepper = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    return wrapper.firstElementChild;
}