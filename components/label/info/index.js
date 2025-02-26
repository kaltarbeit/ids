import html from '!!raw-loader!./index.html';


export const createCheckbox = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

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

    return wrapper.firstElementChild;
}