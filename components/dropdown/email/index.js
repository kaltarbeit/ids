import html from '!!raw-loader!./index.html';


export const createDropdown = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    return wrapper.firstElementChild;
}