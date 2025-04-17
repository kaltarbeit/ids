import html from '!!raw-loader!./index.html';


export const createEmptyStates = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    return wrapper.firstElementChild;
}