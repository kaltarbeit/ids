import '../divider.css';
import html from '!!raw-loader!./index.html';


export const createDivider = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    return wrapper.firstElementChild;
}