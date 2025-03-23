import html from '!!raw-loader!./index.html';


export const createSnackbar = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    return wrapper.firstElementChild;
}