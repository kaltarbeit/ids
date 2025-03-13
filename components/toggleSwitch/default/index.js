import html from '!!raw-loader!./index.html';


export const createToggleSwitch = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);
    return wrapper.firstElementChild;
}