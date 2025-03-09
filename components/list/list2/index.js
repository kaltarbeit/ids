import html from '!!raw-loader!./index.html';


export const createList = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    /** Examples **/
    function toggleAccordion(e) {
        const item = e.currentTarget.parentElement;
        const detail = item.querySelector('.ids2-accordion-details');

        if(!!detail) {
            const opened = item.hasAttribute('open');

            if(opened) {
                item.removeAttribute('open');
                detail.style.height = 0;
            } else {
                item.setAttribute('open', '');
                detail.style.height = detail.scrollHeight+'px';
            }
        }
    }

    function openAccordion(item) {
        const detail = item.querySelector('.ids2-accordion-details');
        item.setAttribute('open', '');

        setTimeout(() => {
            detail.style.height = detail.scrollHeight+'px';
        });
    }

    function initAccordion(wrapper) {
        const items = wrapper.querySelectorAll('.ids2-accordion-item');

        items.forEach(item => {
            item.firstElementChild.addEventListener('click', toggleAccordion);
            openAccordion(item);
        });
    }

    initAccordion(wrapper);
    // initAccordion(document);



    return wrapper.firstElementChild;
}