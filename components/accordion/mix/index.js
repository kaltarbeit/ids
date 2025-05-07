import html from '!!raw-loader!./index.html';

export const createAccordion = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    /** Examples **/
    function toggleAccordion(e) {
        const item = e.currentTarget.parentElement;
        const details = item.querySelector('.ids-accordion-details');

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
        const items = wrapper.querySelectorAll('.ids-accordion-item');

        items.forEach(item => {
            item.firstElementChild.addEventListener('click', toggleAccordion);
        });
    }

    const checkboxAlls = wrapper.querySelectorAll('.ids-checkbox-all');

    checkboxAlls.forEach((checkboxAll) => {
        const checkboxes = wrapper.querySelectorAll(`input[name="${checkboxAll.getAttribute('name')}"]`);
        checkboxAll.addEventListener('change', () => {
            checkboxes.forEach(checkbox => checkbox.checked = checkboxAll.checked);
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
        }));
    })

    initAccordion(wrapper);
    // initAccordion(document);


    /** Examples **/

    return wrapper.firstElementChild;
};

