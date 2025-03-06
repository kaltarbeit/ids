import html from '!!raw-loader!./index.html';

export const createAccordion = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    /** Examples **/
    function toggleAccordion(e) {
        const item = e.currentTarget.parentElement;
        const details = item.getElementsByClassName('ids2-accordion-details')

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
        const items = wrapper.getElementsByClassName('ids2-accordion-item');

        for(var i = 0; i < items.length; i++) {
            items[i].firstElementChild.addEventListener('click', toggleAccordion);
        }
    }

    const checkboxAll = wrapper.querySelector('#checkAll');
    const checkboxes = wrapper.querySelectorAll('input[name="checkbox"]');

    checkboxAll.addEventListener('change', () => {
        checkboxes.forEach(checkbox => checkbox.checked = checkAll.checked);
    });

    checkboxes.forEach(checkbox => checkbox.addEventListener('change', () => {
        let checkedAll = true;
        for(let i = 0; checkboxes.length > i; i++) {
            if(!checkboxes[i].checked) {
                checkedAll = false;
                break;
            }
        }

        checkboxAll.checked = checkedAll;
    }))

    initAccordion(wrapper);
    // initAccordion(document);


    /** Examples **/

    return wrapper.firstElementChild;
};

