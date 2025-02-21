import '../button.css';
import html from '!!raw-loader!./index.html';


export const createButton = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    return wrapper.firstElementChild;
}