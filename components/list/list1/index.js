import html from '!!raw-loader!./index.html';


export const createList = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const stars = wrapper.querySelectorAll('.ids-favorite');

    /** Examples **/
    function toggleAccordion(e) {
        const item = e.currentTarget.parentElement;
        const detail = item.querySelector('.ids-accordion-details');

        if(!!detail) {
            const opened = item.classList.contains('ids-accordion-item-open');

            if(opened) {
                item.classList.remove('ids-accordion-item-open');
                detail.style.height = 0;
            } else {
                item.classList.add('ids-accordion-item-open');
                detail.style.height = detail.scrollHeight+'px';
            }
        }
    }

    function openAccordion(item) {
        const detail = item.querySelector('.ids-accordion-details');
        item.classList.add('ids-accordion-item-open');

        setTimeout(() => {
            detail.style.height = detail.scrollHeight+'px';
        });
    }

    function initAccordion(wrapper) {
        const items = wrapper.querySelectorAll('.ids-accordion-item');

        items.forEach(item => {
            item.firstElementChild.addEventListener('click', toggleAccordion);
            openAccordion(item);
        });
    }

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const starIcon = star.querySelector('.ids-icon');
            starIcon.classList.toggle('ids-icon-star-fill');
            starIcon.classList.toggle('ids-icon-star');
        })
    })

    initAccordion(wrapper);
    // initAccordion(document);



    return wrapper.firstElementChild;
}