import html from '!!raw-loader!./index.html';

export const createAccordion = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    /** Examples **/
    function toggleAccordion(e) {
        const item = e.currentTarget.parentElement;
        const details = item.querySelector('.ids-accordion-details')

        if(details) {
            const opened = item.classList.contains('ids-accordion-item-open');

            if(opened) {
                item.classList.remove('ids-accordion-item-open');
                details.style.height = 0;
            } else {
                item.classList.add('ids-accordion-item-open');
                details.style.height = details.scrollHeight+'px';
            }
        }
    }

    function initAccordion(wrapper) {
        const items = wrapper.getElementsByClassName('ids-accordion-item');

        for(var i = 0; i < items.length; i++) {
            items[i].firstElementChild.addEventListener('click', toggleAccordion);
        }
    }

    initAccordion(wrapper);
    // initAccordion(document);

    /** Examples **/

    return wrapper.firstElementChild;
};

