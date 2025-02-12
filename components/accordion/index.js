import './styles.css';
import html from '!!raw-loader!./index.html';

export const createAccordion = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    /** Examples **/
    function toggleAccordion(e) {
        const item = e.currentTarget.parentElement;
        const details = item.getElementsByClassName('accordion-details')

        if(details.length > 0) {
            const opened = item.hasAttribute('open');

            if(opened) {
                item.removeAttribute('open');
                details[0].style.height = 0;
            } else {
                item.setAttribute('open', '');
                details[0].style.height = details[0].scrollHeight+'px';
            }
        }
    }

    function initAccordion(wrapper) {
        const items = wrapper.getElementsByClassName('accordion-item');

        for(var i = 0; i < items.length; i++) {
            items[i].firstElementChild.addEventListener('click', toggleAccordion);
        }
    }

    initAccordion(wrapper);
    // initAccordion(document);

    /** Examples **/

    return wrapper.firstElementChild;
};

